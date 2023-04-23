import React from 'react'
import MessagesComponent from './MessagesComponent'
import InputComponent from './InputComponent'

import { useContext } from 'react'
import { ChatContext } from '../context/chatContext'

const ChatComponents = () => {
  const { data } = useContext(ChatContext)

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons"></div>
      </div>
      <MessagesComponent />
      <InputComponent />
    </div>
  )
}

export default ChatComponents
