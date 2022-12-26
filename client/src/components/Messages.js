import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMessages, selectMyMessages, messageAdded } from '../features/messagesSlice'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'

const Messages = ({ friend, user }) => {
  const dispatch = useDispatch()
  const currUserMessages = useSelector(selectMyMessages)
  const [message, setMessage] = useState("")

  useEffect(() => {
    dispatch(fetchMessages())
  }, [])

  // fetchMessages fetches all messages
  // filter messages to be only relevant to the current user and the friend in the convo
  // will use the user obj to make the comparison 
  // need to find way to filter all messages by friend_id to relevant convo

  console.log(currUserMessages)
  console.log(friend)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({message: message, user_id: user.id, friend_id: friend.id})
    })
    .then(r => r.json())
    .then(newMessage => dispatch(messageAdded(newMessage)))
  }

  return (
    <div className="chatWindow">
        <ul className="chat" id="chatList">
          {currUserMessages.map(data => (
            <div key={data.id}>
              {user.id === data.user_id ? (
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
          <form onSubmit={handleSubmit}>
            <input
              className="textarea input"
              type="text"
              placeholder="Enter your message..."
              onChange={e => setMessage(e.target.value)}
            />
            <Button type="submit" variant="outlined" sx={{ color: '#FFA500', backgroundColor: 'white', borderColor: '#FFA500' }} endIcon={<SendIcon />}>Message</Button>
          </form>
        </div>
      </div>
  )
}

export default Messages