import React from 'react'

const SearchComponent = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='search user'/>
      </div>
      <div className="userChat">
        <img src="https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=620&quality=45&dpr=2&s=none" alt="" />
        <div className="userChatInfo">
          <span>Dimon</span>
        </div>
      </div>
    </div>
  )
}

export default SearchComponent
