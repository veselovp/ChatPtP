import React from 'react'

const MessageComponent = () => {
  return <div className='message'>
    <div className="messageInfo">
      <img src="https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=620&quality=45&dpr=2&s=none" alt="" />
      <span>just now</span>
    </div>
    <div className="messageContent">
      <p>hello</p>
      {/* <img src="https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=620&quality=45&dpr=2&s=none" alt=""/> */}
    </div>
  </div>
}

export default MessageComponent
