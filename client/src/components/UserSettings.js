import React from 'react'
import { selectUser } from '../features/sessionSlice'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, Card, CardContent, CardMedia, Avatar, Typography, Button } from "@material-ui/core"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"
import LocationOnIcon from "@material-ui/icons/LocationOn"

const UserSettings = () => {
    const user = useSelector(selectUser)
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

      const handleUpdate = () => {
        console.log("hi")
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
        <Button onClick={handleUpdate}>Update</Button>
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
    </div>
  )
}

export default UserSettings