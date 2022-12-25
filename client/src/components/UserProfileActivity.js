import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core"
import { activityUpdated, activityRemoved } from '../features/activitiesSlice';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const UserProfileActivity = ({ activity }) => {
    const [toggle, setToggle] = useState(false)
    const [sport, setSport] = useState("")
    const dispatch = useDispatch()

    const useStyles = makeStyles(theme => ({
        clikcableIcon: {
            color: "black",
           "&:hover": {
            color: "#FFA500"
           },
          },
    }))
    const classes = useStyles()

    const handleUpdate = (e) => {
        e.preventDefault()
        fetch(`activities/${activity.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ sport })
        })
        .then(r => r.json())
        .then(updatedActivity => dispatch(activityUpdated(updatedActivity)))
    }

    const handleDelete = () => {
        fetch(`activities/${activity.id}`, {
            method: "DELETE"
        })
        .then(r => {
             if (r.ok) {
                dispatch(activityRemoved(activity.id))
                }
            })
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
               {activity.user?.username}
            </Typography>
            <Avatar src={activity.user?.picture} />
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
                {activity?.upvotes === null ? "(0) Kudos" : `${activity?.upvotes} Kudos`}
            <span className="userEdit"><EditIcon onClick={() => setToggle(toggle => !toggle)} className={classes.clikcableIcon} fontSize="small"/></span>
            <span><DeleteIcon onClick={handleDelete} className={classes.clikcableIcon} fontSize="small"/></span>
            {toggle ? 
            <>
            <form onSubmit={handleUpdate}>
                <TextField
                label="What Activity?"
                id="sport"
                variant="standard"
                defaultValue={activity.sport}
                onChange={e => setSport(e.target.value)}
                />
                <br></br>
                <Button sx={{ color: "#FFA500"}} type="submit">save</Button>
                </form>
                </>
              : null}
            </CardContent>
            </Card>
            </Grid>
        </Grid>
    </div>
  )
}

export default UserProfileActivity