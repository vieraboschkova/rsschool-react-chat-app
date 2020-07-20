import React from 'react'
// import PropTypes from 'prop-types'

const ChatInput = (props) => {
    const {submitMessage} = props

    return (
      <form className="bottom"
        action="."
        onSubmit={e => {
          e.preventDefault()
          const newMessage = document.getElementById('newMsg')
          submitMessage(newMessage.value)
          newMessage.value = ""
        }}
      >
        <input
          id = "newMsg"
          type="text"
          placeholder={'Enter message...'}
        />
        <input type="submit" value={'Send'} />
      </ form>
    )
  }
        
export default ChatInput