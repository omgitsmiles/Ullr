import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gearAdded, allGears, fetchGears } from '../features/gearsSlice'
import { selectUser } from '../features/sessionSlice'

const Testgear = () => {
    const [formData, setFormData] = useState({
        shoes: "",
        picture: ""
    })
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const gears = useSelector(allGears)

    useEffect(() => {
        dispatch(fetchGears)
    }, [])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
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

    // console.log(allGears)

  return (
    <div>
        <h2>hi {user?.username}</h2>
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <input name="shoes"></input>
            <input name="picture"></input>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Testgear