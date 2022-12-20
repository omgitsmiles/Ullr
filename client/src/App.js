import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchActivities, selectAllActivities } from './features/activitiesSlice'
import { selectUser, autoLogin } from './features/sessionSlice'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Testgear from './components/Testgear'
import NavBar from './components/NavBar'
import UserFeed from './components/UserFeed'
import Groups from './components/Groups'
import Messages from './components/Messages'
import Testnav from './components/Testnav'
import UserProfile from './components/UserProfile'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  
  
  useEffect(() => {
    dispatch(fetchActivities())
  }, [])

  useEffect(() => {
    dispatch(autoLogin())
  }, [])

  console.log(selectUser)


  return (
    <div className="App">
        {!user ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/user/profile" element={<UserProfile />}/>
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
