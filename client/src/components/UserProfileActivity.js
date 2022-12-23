import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const UserProfileActivity = ({ activity, user }) => {


  return (
    <div>
        <h2>My Activities</h2>
        <Grid container sx={{ justifyContent: 'center', marginTop: '3%' }}>
        <Grid item key="" xs={12} sm={6} md={4}>
            <Card className="card"
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
            <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" className="activityUser">
               {user.username}
            </Typography>
            <Avatar src={user?.picture} />
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
                <strong>Gear</strong>: {activity.users_gear}
            </Typography>
                <br></br>
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

export default UserProfileActivity