import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMessages, selectMyMessages } from '../features/messagesSlice'

const Messages = ({ friend, user }) => {
  const dispatch = useDispatch()
  const currUserMessages = useSelector(selectMyMessages)

  useEffect(() => {
    dispatch(fetchMessages())
  }, [])

  console.log(user)
  console.log(currUserMessages)

  return (
    <div className="chatWindow">
        <ul className="chat" id="chatList">
          {currUserMessages.map(data => (
            <div>
              {user.id !== data.user.id ? (
                <li className="self">
                  <div className="msg">
                    <p>{user.username}</p>
                    <div className="message">{data.message}</div>
                  </div>
                </li>
              ) : ( 
                <li className="other">
                  <div className="msg">
                    <p>{friend.username}</p>
                    <div className="message">{data.message}</div>
                  </div>
                </li>
              )} 
            </div>
           ))} 
        </ul>
        <div className="chatInputWrapper">
          <form >
            <input
              className="textarea input"
              type="text"
              placeholder="Enter your message..."
              // onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
  )
}

export default Messages