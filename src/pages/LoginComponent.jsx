import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

import { useNavigate, Link } from 'react-router-dom'

const LoginComponent = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (err) {
      setErr(true)
    }
  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">messanger</span>
        <span className="title">login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>sign in</button>
          {err && <span>here is something wrong</span>}
        </form>
        <p>
          dont have account? <Link to="/register">register</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginComponent
