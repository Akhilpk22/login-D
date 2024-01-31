import React from 'react'
import './Login.css'

function Login() {
  return (
    <>
    <div className='body'>
        <form className='box' action="" method='post'>
            <h1>Login</h1>
            <input type="text"  name='' placeholder='username'/>
            <input type="email"  name='' placeholder='email'/>
            <input type="password" name='' placeholder='password'/>

            <input type="submit" name='' value="login"/>

        </form>
    </div>
    </>
  )
}

export default Login