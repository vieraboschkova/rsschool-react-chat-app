import React from 'react'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

import Welcome from './Welcome'

const Chat = (props) => {
  const {userName, submitMessage, clientWS, messages, connection, connect, disconnect} = props
      return (
        <div className="main-container">
          <Welcome 
            userName = {userName}
            clientWS={clientWS}
            connection = {connection}
            connect = {connect}
            disconnect = {disconnect}
          />
          <div className="chat-container" id="chat"
            >
            <ChatInput 
              userName = {userName}
              clientWS={clientWS}
              submitMessage = {submitMessage} 

            />

            {messages.map((msg, index) =>
              
              <ChatMessage
                userName = {userName}
                key={index}
                time = {msg.time}
                message={msg.message}
                name={msg.from}
              />,
            )}
            </div>

        </div>
      )
    }
  
  

export default Chat