import React from 'react'

import NavbarComponent from './NavbarComponent'
import SearchComponent from './SearchComponent'
import ChatsComponent from './ChatsComponent'

const SidebarComponent = () => {
  return (
    <div className="sidebar">
      <NavbarComponent />
      <SearchComponent />
      <ChatsComponent />
    </div>
  )
}

export default SidebarComponent
