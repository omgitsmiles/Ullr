import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from '../features/groupsSlice'
import { Button, Icon } from '@mui/material'
import { Avatar } from '@mui/material'
import { selectUser } from '../features/sessionSlice'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'

const Group = ({ groups }) => {
    const { id } = useParams()
    const currentUser = useSelector(selectUser)
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    const [group, setGroup] = useState()
    const [newPost, setNewPost] = useState("")

    useEffect(() => {
        const singleGroup = groups.find(group => group.id === parseInt(id))
        setGroup(singleGroup)
    }, [groups, id])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({post: newPost, group_id: id})
        })
        .then(r => r.json())
        .then(post => dispatch(postAdded(post)))
    }
    
  return (
    <div>
        <h3>{group?.name}</h3>
        <br></br>
        <h4>Add your comments</h4>
        <form onSubmit={handleSubmit}>
            <TextField
            width="200"
            id="outlined-multiline-static"
            label="Post"
            onChange={e => setNewPost(e.target.value)}
            value={newPost}
            multiline
            rows={8}
            />
            <br></br>
            <Button sx={{ flex: "auto", color: "#FFA500" }} type="submit">Submit</Button>
        </form>
        <h3>Posts</h3>

        <Grid container sx={{ justifyContent: 'center', marginTop: '3%' }}>
        <Grid item key="" xs={12} sm={6} md={4}>
            <Card className="card"
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
            <CardContent sx={{ flexGrow: 1 }}>
           {group?.posts.map(post => (
            <div key={post.id}>
                <Typography gutterBottom variant="h5" className="activityUser">
                        {post.user}
                    </Typography>
                    <Avatar src={post.user_pic}/>
                    <Typography className="activityUser">
                        {post.username}
                    </Typography>
                    <Typography>
                        {post.post}
                </Typography>
            </div>
               ))}
            </CardContent>
            </Card>
            </Grid>
        </Grid>
    </div>
  )
}

export default Group