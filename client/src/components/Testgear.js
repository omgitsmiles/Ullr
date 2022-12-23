import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gearAdded, gearRemoved, selectAllGears, fetchGears } from '../features/gearsSlice'
import { selectUser } from '../features/sessionSlice'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import PopUp from './PopUp';

const Testgear = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const gears = useSelector(selectAllGears)
    const [togglePopUp, setTogglePopUp] = useState(false)
    const [select, setSelect] = useState("")
    const [formData, setFormData] = useState({
        shoes: "",
        bike: "",
        picture: ""
    })

    console.log(user)

    useEffect(() => {
        dispatch(fetchGears())
    }, [])

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

    const renderGears = gears.map(gear => (
        <>
        <p key={gear.id}>{gear.shoes || gear.bike}</p>
        </>
    ))

    const handleToggle = () => {
        setTogglePopUp(togglePopUp => !togglePopUp)
    }

  return (
    <div>
        <h2>hi {user?.username}</h2>
        <h3>Add your gear here</h3>
        <Button onClick={handleToggle}>add shoes</Button>
        <span>
        <Button onClick={handleToggle}>add a bike</Button>
        </span>
        {togglePopUp ? <PopUp toggle={handleToggle}/> : null}
        <div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <div>
                <br></br>
                <TextField
                    sx={{ width: "20%" }}
                    label="Gear"
                    id="bike"
                    defaultValue="name"
                    variant="standard"
                    value={formData.bike}
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
            <ul>
                {renderGears}
            </ul>
        </div>
    </div>
  )
}

export default Testgear