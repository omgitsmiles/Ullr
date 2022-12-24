import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAllGears, fetchGears } from "../features/gearsSlice"
import { selectUser } from "../features/sessionSlice"
import { activityAdded, selectAllActivities } from "../features/activitiesSlice"
import { makeStyles, Card, CardContent, CardMedia, Avatar, Typography, Button } from "@material-ui/core"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import UserProfileActivity from "./UserProfileActivity"

const useStyles = makeStyles(theme => ({
  text: {
    margin: theme.spacing(0, 0, 0.5),
  },
  avatar: {
    verticalAlign: "middle",
    marginRight: theme.spacing(0.5),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
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
}));

export default function UserCard(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const activities = useSelector(selectAllActivities)
  const gears = useSelector(selectAllGears)
  const [activityToggle, setActivityToggle] = useState(false)
  const [select, setSelect] = useState("")
  const [sport, setSport] = useState("")
  const [distance, setDistance] = useState("")
  const [elapsed, setElapsed] = useState("")
  const [picture, setPicture] = useState("")

  useEffect(() => {
    dispatch(fetchGears())
  }, [])

  const myActivities = activities.filter(activity => activity.user.id === user.id)

  const renderMyActivities = myActivities.map(activity => (
    <UserProfileActivity key={activity.id} activity={activity} user={user}/>
  ))

  const handleSubmit = (e) => {
    e.preventDefault()
    const selectedGear = gears.find(gear => {
      if (gear.bike !== null) {
        return gear.bike === select
      } else {
        return gear.shoes === select
      }
    })
    const newActivity = { sport, distance, elapsed_time: elapsed, picture, gear_id: selectedGear.id}
    fetch("/activities", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newActivity)
    })
    .then(r => r.json())
    .then(activity => dispatch(activityAdded(activity)))
    setSport("")
    setDistance("")
    setElapsed("")
    setPicture("")
  }

  return (
    <div>
    <Card
      variant="outlined"
      className={classes.card}
      style={{ display: "inline-block" }}
    >
      <CardMedia align="center">
        <Avatar
          alt="Remy Sharp"
          src={user.picture}
          className={classes.large}
        />
      </CardMedia>
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="h6"
          align="center"
        >
          {props?.content?.name?.first} {props?.content?.name?.last}
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
        <Button>update</Button>
        <Button onClick={() => setActivityToggle(activityToggle => !activityToggle)}>add new activity</Button>
    </Card>
    <br></br>
    <br></br>
    {activityToggle ? 
        <>
        <form onSubmit={handleSubmit}>
          <TextField
            label="What Activity?"
            id="sport"
            variant="standard"
            onChange={e => setSport(e.target.value)}
            value={sport}
            />
          <TextField
            label="How much time?"
            id="elapsed_time"
            variant="standard"
            onChange={e => setElapsed(e.target.value)}
            value={elapsed}
            />
          <TextField
            label="How many miles?"
            id="distance"
            variant="standard"
            onChange={e => setDistance(e.target.value)}
            value={distance}
            />
          <TextField
            label="Picture?"
            id="picture"
            variant="standard"
            onChange={e => setPicture(e.target.value)}
            value={picture}
            />
          <br></br>
          <br></br>
          <Autocomplete
                className="comboBox"
                disablePortal
                id="options"
                options={gears.map(gear => (
                  gear.shoes || gear.bike 
                  ))}
                  sx={{ width: 300 }}
                  onSelect={e => setSelect(e.target.value)}
                  renderInput={(params) => <TextField {...params} label="Gear" />}
                  /> 
          <Button type="submit" variant="outlined" sx={{ color: '#FFA500', backgroundColor: 'white', borderColor: '#FFA500' }}>submit</Button>
          </form>
        </>: null}
        <br></br>
        <h2>My Activities</h2>
    {renderMyActivities}
    </div>
  );
}