import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gearAdded, gearRemoved, selectAllGears, fetchGears } from '../features/gearsSlice'
import { selectUser } from '../features/sessionSlice'
import { Button } from '@mui/material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PopUpShoes from './PopUpShoes';
import PopUpBike from './PopUpBike';

const Testgear = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const gears = useSelector(selectAllGears)
    const [toggleShoe, setToggleShoe] = useState(false)
    const [toggleBike, setToggleBike] = useState(false)
    const [formData, setFormData] = useState({
        shoes: "",
        bike: "",
        picture: ""
    })

    console.log(user)

    useEffect(() => {
        dispatch(fetchGears())
    }, [])

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

    const renderShoes = gears.map(gear => (
        <>
        <p key={gear.id}>{gear.shoes}</p>
        </>
    ))

    const renderBikes = gears.map(gear => (
        <>
        <p key={gear.id}>{gear.bike}</p>
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
        <h3><SettingsSuggestIcon fontSize="large"/></h3>
        <Button onClick={handleToggleShoe} sx={{ color: '#FFA500'}}>add shoes</Button>
        <span>
        <Button onClick={handleToggleBike} sx={{ color: '#FFA500'}}>add a bike</Button>
        </span>
        {toggleShoe ? <PopUpShoes toggle={handleToggleShoe}/> : null}
        {toggleBike ? <PopUpBike toggle={handleToggleBike}/> : null}
        <div>
            <h3>Shoes</h3>
                {renderShoes}
            <h3>Bikes</h3>
                {renderBikes}
        </div>
    </div>
  )
}

export default Testgear