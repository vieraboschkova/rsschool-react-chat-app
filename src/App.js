import React, { Component } from 'react'
import Chat from './Chat'
import LoginPage from './LoginPage'
import Notification from './Notification'
import {NotificationManager} from 'react-notifications';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import sw from './service-worker'
import showPush from './showPush'

(sw)()
const URL = "ws://st-chat.shas.tel";

// const workingURL = "wss://echo.websocket.org/";

class App extends Component {
    // constructor(props) {
    //     super(props);
    // }
    initialState = {
        userName: '',
        isLoggedIn: false,
        messages: [],
        connection : '',
    }

    state = this.initialState

    componentDidMount() {
       if (localStorage.username) {
            const user = localStorage.getItem('username')
            this.setState({
                userName: user,
                isLoggedIn: true
            })
            this.connect()
        }
    }

    connect = () => {
        if (this.state.connection === 'connected') {
            console.log('you are connected already')
            NotificationManager.success('You are already connected');
        } else {
            this.setState({connection: 'trying to connect'}) 
            const client = new W3CWebSocket(URL)
            client.onopen = () => {
                this.setState({
                    connection: 'connected',
                    ws: client
                })
                this.state.isLoggedIn === true? NotificationManager.success('You are now connected') : console.log()
                
            }
            client.onclose = () => {
                console.log('WebSocket Client DISConnected');
                this.setState({connection: 'disconnected'}) 
                NotificationManager.warning('You are now disconnected');
                setTimeout (this.connect, 5000);
            }
            client.onerror = () => {
                console.log('Connection Error')  
                this.setState({connection: 'trying to reconnect'})  
                NotificationManager.error('Connection Error.Trying to reconnect');   
            }
            client.onmessage = (event) => {
                const messageFromServer = JSON.parse(event.data)
                this.addMessage(messageFromServer)
                console.log(messageFromServer)
                showPush(messageFromServer[0].from)
            }
        }
    }


    addMessage = (msg) => {
        this.setState(state => ({ 
            messages: msg.concat(...state.messages)
        }))
    }
    
    submitMessage = messageString => {
        if (this.state.connection !== 'connected') {
            alert('you are not connected')
        } else {
        const message = { from: this.state.userName, message: messageString }
        this.state.ws.send(JSON.stringify(message))
        }
    }

    logging = (value) => {
        console.log('changing log')
        this.setState(state => ({
            userName: value,
            isLoggedIn: true,
            })
        )
        this.connect()
    }

    render() {
        return (
        
        <div className="app">
            <Notification/>
            {!this.state.isLoggedIn ?
            <LoginPage 
                userName ={this.state.userName} 
                logging={this.logging}
            />
            :
            <Chat 
                userName ={this.state.userName} 
                submitMessage = {this.submitMessage} 
                clientWS = {this.client}
                messages = {this.state.messages}
                connection = {this.state.connection}
                connect = {this.connect}
                disconnect = {this.disconnect}
            />
        }
        </div>
        )
    }
}

export default App