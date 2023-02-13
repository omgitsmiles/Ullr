import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMessages, selectAllMessages, messageAdded } from '../features/messagesSlice'
import { selectUser } from '../features/sessionSlice'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'

const Messages = ({ friend, user }) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectUser)
  const allMessages = useSelector(selectAllMessages)
  const [message, setMessage] = useState("")

  useEffect(() => {
    dispatch(fetchMessages())
  }, [dispatch])

  //filter over all message to just between the user and friend id - currentConvo
  //sort by stamp, render out the visual

  const currentConvo = allMessages.filter(message => friend.id === message.friend_id)

  console.log(currentConvo)

  console.log(allMessages)
  console.log("Friend", friend)
  console.log("User", user)
  console.log("Current User", currentUser)
  
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
    setMessage("")
  }

  //find in allmessages the user.user_id that matches current user id, if found render convo, else render "start convo"
  //map over all messages
  //in map if user.id matches the data.user_id then render the user name and current user messages
  //else render the friends username and friends messages. 

  return (
    <div className="chatWindow">
        <ul className="chat" id="chatList">
          {allMessages.find(user => user.user_id === user.id) ? currentConvo.map(data => (
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
                {/* instead of friend.username, utilize the data to match the friend username */}
                    <p>{friend.username}</p>
                    <div className="message">{data.message}</div>
                  </div>
                </li>
              )} 
            </div>
           )) : "Start a conversation" } 
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