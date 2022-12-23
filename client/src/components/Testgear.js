import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gearAdded, gearRemoved, selectAllGears, fetchGears } from '../features/gearsSlice'
import { selectUser } from '../features/sessionSlice'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import PopUpShoes from './PopUpShoes';
import PopUpBike from './PopUpBike';

const Testgear = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const gears = useSelector(selectAllGears)
    const [toggleShoe, setToggleShoe] = useState(false)
    const [toggleBike, setToggleBike] = useState(false)
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

    const handleToggleShoe = () => {
        setToggleShoe(toggleShoe => !toggleShoe)
    }
    const handleToggleBike = () => {
        setToggleBike(toggleBike => !toggleBike)
    }

  return (
    <div>
        <h2>hi {user?.username}</h2>
        <h3>Add your gear here</h3>
        <Button onClick={handleToggleShoe}>add shoes</Button>
        <span>
        <Button onClick={handleToggleBike}>add a bike</Button>
        </span>
        {toggleShoe ? <PopUpShoes toggle={handleToggleShoe}/> : null}
        {toggleBike ? <PopUpBike toggle={handleToggleBike}/> : null}
        <div>
            <ul>
                {renderGears}
            </ul>
        </div>
    </div>
  )
}

export default Testgear