import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectAllActivities, fetchActivities } from "../features/activitiesSlice"
import UserFeedActivity from "./UserFeedActivity"
import CircularProgress from '@mui/material/CircularProgress';

const UserFeed = () => {
    const dispatch = useDispatch()
    const allActivities = useSelector(selectAllActivities)
    const loadingState = useSelector(state => state.activity.isLoading)

    useEffect(() => {
      dispatch(fetchActivities())
    }, [])

    const renderActivities = allActivities.map(activity => (
        <UserFeedActivity key={activity?.id} activity={activity}/>
    ))


  return (
    <div>
      {loadingState ? (
        <CircularProgress />
      ) : null}
      {renderActivities}
    </div>
  )
}

export default UserFeed