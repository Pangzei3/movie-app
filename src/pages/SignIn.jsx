import React from 'react'
import Logo from '.././components/images/logo.png'
import './signIn.css'



function SignIn() {
  return (
    <div className="signIn">
      <div className="signIn-wrapper">
        <div className="signIn-top">
          <h1>Sign In</h1>
          <div className="signIn-img"><img src={Logo} alt="" /></div>
        </div>
        <div className="signIn-bottom">
          <form action="">
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <button className="loginButton">Sign In</button>
            <span>New to MovieList? <strong>Register now</strong></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn