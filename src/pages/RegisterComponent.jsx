import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'

import { useNavigate, Link } from 'react-router-dom'

import { auth, db, storage } from '../firebase'

const RegisterComponent = () => {
  const [err, setErr] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password)

      //Create a unique image name
      const date = new Date().getTime()
      const storageRef = ref(storage, `${displayName + date}`)

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            //create user on firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })

            //create empty user chats on firestore
            await setDoc(doc(db, 'userChats', res.user.uid), {})
            navigate('/')
          } catch (err) {
            console.log(err)
            setErr(true)
          }
        })
      })
    } catch (err) {
      setErr(true)
    }
  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">messanger</span>
        <span className="title">register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="displayname" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password 6 symbols" />
          <input style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="file">ADD IMAGE +</label>
          <button>sign up</button>
          {err && <span>here is something wrong</span>}
        </form>
        <p>
          do you have account? <Link to="/login">login</Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterComponent
