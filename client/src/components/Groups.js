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

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/groups", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(newGroup => console.log(newGroup))
    setFormData({
      name: "",
      description: ""
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
            <form onChange={handleChange} onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Name"
              value={formData.name}
              multiline
            />
              <br></br>
              <br></br>
              <TextField
                id="description"
                label="Description"
                value={formData.description}
                multiline
                rows={4}
              />
              <br></br>
              <br></br>
              <Button type="submit" variant="outlined" sx={{ color: '#FFA500', backgroundColor: 'white', borderColor: '#FFA500' }}>Submit</Button>
            </form>
          </>
        ) : null}
    </div>
  )
}

export default Groups