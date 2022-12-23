import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { gearAdded } from '../features/gearsSlice';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const PopUpShoes = ({ toggle }) => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        shoes: "",
        picture: ""
    })

    const handleChange = (e) => {
        setFormData({...formData,
        [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/gears", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(newGear => dispatch(gearAdded(newGear)))
    }


  return (
    <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={toggle}>
            &times;
          </span>
          <h3>Add Running Shoes</h3>
          <form onSubmit={handleSubmit} onChange={handleChange}>
            <div>
                <br></br>
                <TextField
                    sx={{ width: "20%" }}
                    label="Gear"
                    id="shoes"
                    defaultValue="name"
                    variant="standard"
                    value={formData.shoes}
                />
                <br></br>
                <br></br>
                <TextField
                    sx={{ width: "20%" }}
                    label="Picture URL"
                    id="picture"
                    defaultValue="picture"
                    variant="standard"
                />
            </div>
            <br></br>
            <Button type="submit" variant="outlined" sx={{ color: '#FFA500', backgroundColor: 'white', borderColor: '#FFA500' }}>submit</Button>
        </form>
        </div>
      </div>
  )
}

export default PopUpShoes
