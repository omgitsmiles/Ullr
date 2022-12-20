import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGears } from '../features/gearsSlice'


const UserProfile = () => {
    const dispatch = useDispatch()
    const gears = useSelector(state => state.gear.gears)

    useEffect(() => {
        dispatch(fetchGears())
    }, [])

    

  return (
    <div>

    </div>
  )
}

export default UserProfile