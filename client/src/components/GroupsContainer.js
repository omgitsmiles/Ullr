import React, { useEffect, useState } from 'react'
import { fetchGroups, selectAllGroups, groupAdded } from '../features/groupsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/sessionSlice';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Groups from './Groups';

const GroupsContainer = () => {
  const allGroups = useSelector(selectAllGroups)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  })

  useEffect(() => {
    dispatch(fetchGroups())
  }, [])

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
    .then(newGroup => dispatch(groupAdded(newGroup)))
    setFormData({
      name: "",
      description: ""
    })
  }

  const renderGroups = allGroups.map(group => (
    <Groups key={group.id} group={group} />
  ))

  return (
    <div>
        <h2>Groups</h2>
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
        <br></br>
        <br></br>
        {renderGroups}
    </div>
  )
}

export default GroupsContainer