import { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const sub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      console.log(user)
    })
    return () => {
      sub()
    }
  }, [])

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  )
}
