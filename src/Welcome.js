import React from 'react'
import initApp from './index'

const ConnectSign = (props) => {
    const {connection, connect} = props
    return (
        <div className="tooltip">
            <svg 
                className='connection-status' 
                height="30" width="30"
                onClick = {connect}
                >
                <circle 
                    cx="15" cy="17" r="12" fill="grey" 
                    style = {connection === 'connected' ? {
                        fill:"#29de7d"
                    }
                    :
                    {
                        fill:"#ff8282"
                    }}
                    >
                </circle>
            </svg>
            <span className="tooltiptext">RECONNECT</span>
        </div>
    )
} 

const Welcome = (props) => {
    const {userName, connection, connect} = props

    return (
        <div className="welcome-container">
            
            <h1 className="title">
            <ConnectSign 
                connection = {connection}
                connect = {connect}
                />
                RS SCHOOL CHAT</h1>
            <h4 className="welcome-user">Welcome {userName.toUpperCase()} !</h4>
            {connection === 'connected' ?
            <p className="inline">
            You are now: <strong>{connection}</strong> 
            </p>
            :
            <p className="inline">
            You are now: <strong>{connection}</strong>.
            </p>
            } 
            Not <strong>{userName}</strong>? 
            <a
            href='' 
            onClick={e => {
              // e.preventDefault()
              localStorage.clear()
              initApp()
            }}
            >  Log out</a>
        </div>
    )
}
export default Welcome