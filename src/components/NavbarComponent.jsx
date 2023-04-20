import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { UserContext } from '../context/userContext'

const NavbarComponent = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <div className="navbar">
      <span className="logo">chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>quit</button>
      </div>
    </div>
  )
}

export default NavbarComponent
