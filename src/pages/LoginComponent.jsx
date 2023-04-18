import React from 'react'

const LoginComponent = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">messanger</span>
        <span className="title">login</span>
        <form action="">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>sign in</button>
        </form>
        <p>dont have account? register</p>
      </div>
    </div>
  )
}

export default LoginComponent
