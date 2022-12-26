import React, { useState } from 'react'
import { selectUser, userUpdated } from '../features/sessionSlice'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, Card, CardContent, CardMedia, Avatar, Typography, Button } from "@material-ui/core"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import TextField from '@mui/material/TextField';

const UserSettings = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    const [location, setLocation] = useState("")
    const useStyles = makeStyles(theme => ({
        text: {
          margin: theme.spacing(0, 0, 0.5),
        },
        avatar: {
          verticalAlign: "middle",
          marginRight: theme.spacing(0.5),
        },
        large: {
          width: theme.spacing(24),
          height: theme.spacing(24),
          margin: theme.spacing(2, 2, 0),
        },
        card: {
          borderRadius: 15,
          maxWidth: "270px",
          minWidth: "270px",
          height: "330px",
          backgroundColor: theme.palette.background.card,
        },
        cardContent: {
          padding: theme.spacing(2, 0, 0, 0),
        },
      }))
      const classes = useStyles()

      const handleUpdate = (e) => {
        e.preventDefault()
        fetch("/user/update", {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({location: location})
        })
        .then(r => r.json())
        .then(updatedUser => dispatch(userUpdated(updatedUser)))
      }

  return (
    <div>
         <Card
      variant="outlined"
      className={classes.card}
      style={{ display: "contents" }}
    >
      <CardMedia align="center">
        <Avatar
          alt={user.username}
          src={user.picture}
          className={classes.large}
        />
        <div>
        <Button onClick={() => setToggle(toggle => !toggle)}>Update</Button>
        </div>
      </CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="h6"
          align="center"
        >
        </Typography>
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="subtitle1"
          align="center"
        >
          <AlternateEmailIcon className={classes.avatar} fontSize="small" />
          {user.username}
        </Typography>{" "}
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="subtitle1"
          align="center"
        >
          <LocationOnIcon className={classes.avatar} fontSize="small" />
          {user.location}
        </Typography>{" "}
      </CardContent>
    </Card>
    {toggle ? 
    <form onSubmit={handleUpdate}>
          <TextField
            label="Password"
            id="sport"
            variant="standard"
            />
          <TextField
            label="Picture"
            id="elapsed_time"
            variant="standard"
            />
          <TextField
            label="Location"
            id="location"
            variant="standard"
            onChange={e => setLocation(e.target.value)}
            />
          <br></br>
          <br></br>
          <Button type="submit" variant="outlined" sx={{ color: '#FFA500', backgroundColor: 'white', borderColor: '#FFA500' }}>submit</Button>
          </form>  : null}
    </div>
  )
}

export default UserSettings