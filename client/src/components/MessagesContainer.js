import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers, fetchUsers } from '../features/usersSlice'
import { selectAllMatches, fetchMatches, matchAdded } from '../features/matchesSlice'
import { selectUser } from '../features/sessionSlice'
import Messages from './Messages'
import Button from '@mui/material/Button'
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

const MessagesContainer = () => {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState({})
    const [select, setSelect] = useState("")
    const [toggleAddFriend, setToggleAddFriend] = useState(false)
    const currentUser = useSelector(selectUser)
    const myMatches = useSelector(selectAllMatches)
    const users = useSelector(selectAllUsers)
    
    useEffect(() => {
        dispatch(fetchMatches())
        dispatch(fetchUsers())
    }, [dispatch])

    const toggleFunction = (id) => {
        setToggle({
            ...toggle,
            [id]: !toggle[id]
        })
    }

    const allUsersExceptCurr = users.filter(user => user.username !== currentUser.username)

    const renderUsers = allUsersExceptCurr.map(user => user.username)

    const renderMatches = myMatches.map((match, index) => (
        <div>
            <p onClick={() => toggleFunction(match.id)} className="friendsList" key={match.id}> <PersonIcon/>{match.friend.username}</p>
            {toggle[match.id] ? <Messages key={index} friend={match.friend} user={match.user}/> : null}
        </div>
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
                
            } else {
                r.json()
                .then(error => console.log(error))
            }
        })
    }

  return (
    <div>
        <Button onClick={() => setToggleAddFriend(toggleAddFriend => !toggleAddFriend)} variant="outlined" sx={{ color: '#FFA500', backgroundColor: 'white', borderColor: '#FFA500' }} endIcon={<GroupAddIcon />}>Add Friend</Button>
        <br></br>
        <br></br>
        {toggleAddFriend ?
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
            <Button onClick={createMatch} variant="outlined" sx={{ color: '#FFA500', backgroundColor: 'white', borderColor: '#FFA500' }}>Add</Button>
        </>
        : null}
          <h2>Friends List</h2>
        {renderMatches}
    </div>
  )
}

export default MessagesContainer