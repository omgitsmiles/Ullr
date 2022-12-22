import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Group = ({ groups }) => {
    const { id } = useParams()
    const [group, setGroup] = useState()


    useEffect(() => {
        const singleGroup = groups.find(group => group.id === parseInt(id))
        setGroup(singleGroup)
    }, [])

    console.log(group)

  return (
    <div>{group?.name}</div>
  )
}

export default Group