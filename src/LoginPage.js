import React from 'react'

const LoginPage = (props) => {
    const {logging} = props
    return (
        <div className="login-container">
            <h1 className="title">RS SCHOOL CHAT</h1>
            <form 
                
                action="."
                onSubmit={e => {
                    e.preventDefault()
                    const newValue = document.getElementById("login")
                    logging(newValue.value)
                    localStorage.setItem('username', newValue.value);
                }}
            >
                <input
                    type="text"
                    placeholder={'Enter username...'}
                    id = "login"
                />
                <input type="submit" value={'LOGIN'} />
            </ form>
        </div>
    )
} 


export default LoginPage