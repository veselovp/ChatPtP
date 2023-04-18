import React from 'react'

import { BiPaperclip } from 'react-icons/bi'

const InputComponent = () => {
  return (
    <div className="input">
      <input type="text" placeholder="type your message" />
      <div className="send">
        <img src="@img" alt="" />
        <input type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          <BiPaperclip />
          <img src="@img" alt="" />
        </label>
        <button>send message</button>
      </div>
    </div>
  )
}

export default InputComponent
