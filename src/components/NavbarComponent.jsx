import React from 'react'

const NavbarComponent = () => {
  return (
    <div className="navbar">
      <span className="logo">chat</span>
      <div className="user">
        <img
          src="https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=620&quality=45&dpr=2&s=none"
          alt=""
        />
        <span>Pavel</span>
        <button>quit</button>
      </div>
    </div>
  )
}

export default NavbarComponent
