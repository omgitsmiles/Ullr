import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const Groups = ({ group }) => {
    const navigate = useNavigate()
    const groupLink = (groupID) => {
        navigate(`/groups/${groupID}`)
    }

    const card = (
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {group.name}
            </Typography>
            <Typography variant="body2">
              {group.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ flex: "auto", color: "#FFA500" }} onClick={() => groupLink(group.id)}>comments</Button>
          </CardActions>
        </React.Fragment>
      );
    

  return (
    <div>
        <Box sx={{ maxWidth: 1000, display: "inline-grid", marginTop: "2%" }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    </div>
  )
}

export default Groups