import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectAllActivities, fetchActivities } from "../features/activitiesSlice"
import UserFeedActivity from "./UserFeedActivity"

const UserFeed = () => {
    const dispatch = useDispatch()
    const allActivities = useSelector(selectAllActivities)

    console.log(allActivities)

    useEffect(() => {
      dispatch(fetchActivities())
    }, [])

    const renderActivities = allActivities.map(activity => (
        <UserFeedActivity key={activity?.id} activity={activity}/>
    ))


  return (
    <div>
          {renderActivities}
    </div>
  )
}

export default UserFeed