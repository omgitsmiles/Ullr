import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gearAdded, gearRemoved, allGears, fetchGears } from '../features/gearsSlice'
import { selectUser } from '../features/sessionSlice'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Testgear = () => {
    const [formData, setFormData] = useState({
        shoes: "",
        picture: ""
    })
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const gears = useSelector(allGears)
    const shoeOrBike = ["Shoe", "Bike"]

    useEffect(() => {
        dispatch(fetchGears())
    }, [])

    console.log(gears)


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // fetch("/gears", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type" : "application/json"
        //     },
        //     body: JSON.stringify(formData)
        // })
        // .then(r => r.json())
        // .then(newGear => dispatch(gearAdded(newGear)))
        dispatch(gearAdded(formData))
    }

    const renderGears = gears.map(gear => (
        <button key={gear.id} onClick={() => dispatch(gearRemoved(gear.id))}>{gear.shoes}</button>
    ))


  return (
    <div>
        <h2>hi {user?.username}</h2>
        <h3>Add your gear here</h3>
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <Autocomplete
                className="comboBox"
                disablePortal
                id="options"
                options={shoeOrBike.map(string => string)}
                sx={{ width: 300 }}
                // onSelect={e => setSelect(e.target.value)}
                renderInput={(params) => <TextField {...params} label="Gear" />}
            />
            <div>
                <br></br>
                <TextField
                    sx={{ width: "20%" }}
                    label="Shoe Name"
                    id="shoes"
                    defaultValue="shoe name"
                    variant="standard"
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
            <Button type="submit" variant="outlined" sx={{ color: '#FFA500', backgroundColor: 'white', borderColor: '#FFA500' }}>Submit</Button>
        </form>
        <div>
            <ul>
                {renderGears}
            </ul>
        </div>
    </div>
  )
}

export default Testgear