import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { activityUpdated, activityUpvoted } from '../features/activitiesSlice';
import { selectUser } from '../features/sessionSlice'; 

const UserFeedActivity = ({ activity }) => {
    const dispatch = useDispatch()
    const { upvotes } = activity
    
    const handleLikes = () => {
        fetch(`/upvotes/${activity.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({upvotes: upvotes + 1})
        })
        .then(r => r.json())
        .then(updatedActivity => dispatch(activityUpvoted(updatedActivity)))
    }

  return (
    <div>
        <Grid container sx={{ justifyContent: 'center', marginTop: '3%' }}>
        <Grid item key="" xs={12} sm={6} md={4}>
            <Card className="card"
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
            <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" className="activityUser">
               {activity?.user.username}
            </Typography>
            <Avatar src={activity?.user.picture} />
            <Typography className="activityUser">
                {activity?.created_at.slice(0, 10)}
            </Typography>
            <Typography>
                <br></br>
            <CardMedia
              component="img"
              image={activity?.picture}
              alt={activity?.name}
            />
                <br></br>
                <strong>{activity?.sport}</strong> | {activity?.distance} miles | {activity?.elapsed_time} mins
                <br></br> 
                Gear: {activity.users_gear}
            </Typography>
                <br></br>
                <button onClick={handleLikes}><ThumbUpAltIcon /></button>
                <br></br>
                <br></br>
                {activity?.upvotes === 0 ? "Be first to give kudos!" : `${activity?.upvotes} Kudos`}
            </CardContent>
            </Card>
            </Grid>
        </Grid>
</div>
  )
}

export default UserFeedActivity