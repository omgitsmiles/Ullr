import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAllActivities, fetchMyActivities } from "../features/activitiesSlice"
import { selectUser } from "../features/sessionSlice"
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  Button
} from "@material-ui/core"
import PhoneIcon from "@material-ui/icons/Phone"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import UserProfileActivity from "./UserProfileActivity"

const useStyles = makeStyles((theme) => ({
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
  const user = useSelector(selectUser)
  const [myActivities, setMyActivities] = useState(user.activities)
  console.log(myActivities)

  const renderMyActivities = myActivities.map(activity => (
    <UserProfileActivity key={activity.id} activity={activity} user={user}/>
  ))

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
        <Button sx={{ flex: "auto", color: "#FFA500" }}>Update</Button>
    </Card>
    {renderMyActivities}
    </div>
  );
}