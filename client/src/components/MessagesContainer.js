import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers, fetchUsers } from '../features/usersSlice'
import { selectAllMatches, fetchMatches } from '../features/matchesSlice'

const MessagesContainer = () => {
    const dispatch = useDispatch()
    const myMatches = useSelector(selectAllMatches)

    useEffect(() => {
        dispatch(fetchMatches())
    }, [])
    
    console.log(myMatches)

    const renderMatches = myMatches.map(friends => (
        <p key={friends.id}>{friends.friend.username}</p>
    ))

  return (

    <div>
        <h2>Friends List</h2>
        {renderMatches}
    </div>

  )
}

export default MessagesContainer