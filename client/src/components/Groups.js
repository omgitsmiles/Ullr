import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Groups = () => {
  const [toggle, setToggle] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  return (
    <div>
        <h2>My Groups</h2>
        <br></br>
        <Button sx={{ color: "#FFA500" }} onClick={() => setToggle(!toggle)}>Create Group</Button>
        <br></br>
        {toggle ? (
          <>
            <br></br>
            <form onChange={handleChange}>
              <TextField
              hiddenLabel
              id="name"
              defaultValue="Name"
              variant="filled"
              size="small"
              />
              <br></br>
            <TextField
              hiddenLabel
              id="description"
              defaultValue="Description"
              variant="filled"
              />
            </form>
          </>
        ) : null}
    </div>
  )
}

export default Groups