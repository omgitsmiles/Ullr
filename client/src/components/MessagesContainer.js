import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers, fetchUsers } from '../features/usersSlice'
import { selectAllMatches, fetchMatches, matchAdded } from '../features/matchesSlice'
import Messages from './Messages'
import Button from '@mui/material/Button'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
import { selectUser } from '../features/sessionSlice'

const MessagesContainer = () => {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    const [select, setSelect] = useState("")
    const [togglePop, setTogglePop] = useState(false)
    const currentUser = useSelector(selectUser)
    const myMatches = useSelector(selectAllMatches)
    const users = useSelector(selectAllUsers)
    
    useEffect(() => {
        dispatch(fetchMatches())
        dispatch(fetchUsers())
    }, [])

    console.log(currentUser)
    console.log(select)

    const allUsersExceptCurr = users.filter(user => user.username !== currentUser.username)

    const renderUsers = allUsersExceptCurr.map(user => user.username)

    const renderMatches = myMatches.map(friends => (
        <p key={friends.id} onClick={() => setTogglePop(togglePop => !togglePop)}>{friends.friend.username}</p>
    ))

    const createMatch = () => {
        const selectedUser = users.find(user => user.username === select).id
        fetch("/matches", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({user_id: currentUser.id, friend_id: selectedUser})
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(newFriend => dispatch(matchAdded(newFriend)))
                alert("Friend added!")
            } else {
                r.json()
                .then(error => console.log(error))
            }
        })
        
    }

  return (
    <div>
        <h2>Friends List</h2>
        {renderMatches}
        <Button onClick={() => setToggle(toggle => !toggle)} variant="outlined" sx={{ color: '#FFA500', backgroundColor: 'white', borderColor: '#FFA500' }} endIcon={<GroupAddIcon />}>Add Friend</Button>
        <br></br>
        <br></br>
        {toggle ?
        <>
            <Autocomplete
            disablePortal
            className="comboBox"
            id="combo-box-demo"
            onSelect={e => setSelect(e.target.value)}
            options={renderUsers}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search Athletes" />}
            />
            <br></br> 
            <Button onClick={createMatch} variant="outlined" sx={{ color: '#FFA500', backgroundColor: 'white', borderColor: '#FFA500' }} endIcon={<SendIcon />}>Add</Button>
        </>
        : null}
        {togglePop ? <Messages /> : null}
    </div>
  )
}

export default MessagesContainer