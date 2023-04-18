import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const RegisterComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
      })
  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">messanger</span>
        <span className="title">register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="displayname" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="file">ADD IMAGE +</label>
          <button>sign up</button>
        </form>
        <p>do you have account? login</p>
      </div>
    </div>
  )
}

export default RegisterComponent
