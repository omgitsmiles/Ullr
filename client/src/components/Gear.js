import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllGears, fetchGears } from '../features/gearsSlice'
import { Button } from '@mui/material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import PopUpShoes from './PopUpShoes';
import PopUpBike from './PopUpBike';

const Testgear = () => {
    const dispatch = useDispatch()
    const gears = useSelector(selectAllGears)
    const [toggleShoe, setToggleShoe] = useState(false)
    const [toggleBike, setToggleBike] = useState(false)

    useEffect(() => {
        dispatch(fetchGears())
    }, [dispatch])

    const renderShoes = gears.map(gear => (
        <div key={gear.id}>
        <p>{gear.shoes}</p>
        </div>
    ))

    const renderBikes = gears.map(gear => (
        <div key={gear.id}>
        <p>{gear.bike}</p>
        </div>
    ))

    const handleToggleShoe = () => {
        setToggleShoe(toggleShoe => !toggleShoe)
    }
    const handleToggleBike = () => {
        setToggleBike(toggleBike => !toggleBike)
    }

  return (
    <div>
        <h3 data-testid="gear"><SettingsSuggestIcon fontSize="large"/></h3>
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