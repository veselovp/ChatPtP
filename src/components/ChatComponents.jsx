import React from 'react'
import MessagesComponent from './MessagesComponent'
import InputComponent from './InputComponent'

const ChatComponents = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Pavel</span>
        <div className="chatIcons">
          <img src="@img" alt="" />
          <img src="@img" alt="" />
          <img src="@img" alt="" />
        </div>
      </div>{' '}
      <MessagesComponent />
      <InputComponent/>
    </div>
  )
}

export default ChatComponents
