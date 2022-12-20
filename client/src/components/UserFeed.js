import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import UserFeedActivity from './UserFeedActivity';

const UserFeed = () => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch("/activities")
        .then(r => r.json())
        .then(setActivities)
    }, [])

    const renderActivities = activities.map(activity => (
        <UserFeedActivity key={activity.id} activity={activity}/>
    ))


  return (
    <div>
          {renderActivities}
    </div>
  )
}

export default UserFeed