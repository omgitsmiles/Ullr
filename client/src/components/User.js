import React from 'react'
import { useParams } from 'react-router-dom'

const UserActivity = () => {
    const { id } = useParams()
  return (
    <div>UserActivity</div>
  )
}

export default UserActivity