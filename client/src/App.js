import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchActivities, allActivities } from './features/activitiesSlice'
import { selectUser } from './features/sessionSlice'
import Login from './components/Login'
import './App.css'
import SignUp from './components/SignUp'
import Testgear from './components/Testgear'
import NavBar from './components/NavBar'
import UserFeed from './components/UserFeed'
import Groups from './components/Groups'
import Messages from './components/Messages'
import Testnav from './components/Testnav'

function App() {
  const dispatch = useDispatch()
  const activities = useSelector(state => state.activities)
  const user = useSelector(selectUser)
  
  
  useEffect(() => {
    dispatch(fetchActivities())
  }, [])

  console.log(activities)
  console.log(allActivities)


  // useEffect(() => {
  //   fetch("/activities")
  //   .then(r => r.json())
  //   .then 
  // }, [])


  return (
    <div className="App">
        {!user ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/user/feed" element={<UserFeed />}/>
        <Route path="/user/groups" element={<Groups />}/>
        <Route path="/user/gear" element={<Testgear />}/>
        <Route path="/user/messages" element={<Messages />}/>
        <Route path="test" element={<Testnav />}/>
      </Routes>
    </div>
  );
}

export default App;
