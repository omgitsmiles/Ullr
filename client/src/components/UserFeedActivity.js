import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const UserFeedActivity = ({ activity }) => {

    console.log(activity)

  return (
    <div>
        <Grid container sx={{ justifyContent: 'center', marginTop: '3%' }}>
        <Grid item key="" xs={12} sm={6} md={4}>
            <Card className="card"
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
            <CardMedia
            component="img"
            image=""
            alt=""
            />
            <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5">
                {activity.user.username}
            </Typography>
            <Typography>
                {activity.created_at.slice(0, 10)}
            </Typography>
            <Typography>
                <br></br>
                <br></br>
                {activity.sport}
                <br></br>
                {activity.distance} miles
            </Typography>
            </CardContent>
            </Card>
            </Grid>
        </Grid>
</div>
  )
}

export default UserFeedActivity