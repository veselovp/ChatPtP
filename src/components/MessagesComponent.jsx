import React, { useState, useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import MessageComponent from './MessageComponent'
import { useContext } from 'react'
import { db } from '../firebase'
import { ChatContext } from '../context/chatContext'

const MessagesComponent = () => {
  const [msg, setMsg] = useState([])
  const { data } = useContext(ChatContext)
  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
      doc.exists() && setMsg(doc.data().messages)
    })

    return () => {
      unSub()
    }
  }, [data.chatId])

  return (
    <div className="messages">
      {msg.map((m) => (
        <MessageComponent message={m} key={m.id} />
      ))}
    </div>
  )
}

export default MessagesComponent
