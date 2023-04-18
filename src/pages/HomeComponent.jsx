import React from 'react'
import SidebarComponent from '../components/SidebarComponent'
import ChatComponents from '../components/ChatComponents'

const HomeComponent = () => {
  return (
    <div className="home">
      <div className="container">
        <SidebarComponent />
        <ChatComponents/>
      </div>
    </div>
  )
}

export default HomeComponent