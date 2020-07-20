import React from 'react'

export default ({ name, message, time, userName }) => {
  return (
  <p className="single-message"
    style = {userName === name ? {
      alignSelf: "flex-end", 
      display: "flex",
      flexDirection: "row-reverse",
      backgroundColor: "#66ccfa",
      border: "#55bbfa 1px solid",
      alignItems: "baseline"
    } 
      : {}}
    
  >
    <strong>{name}</strong> {new Date(time).toLocaleTimeString()} <em>{message}</em>
  </p>
  )
}
  