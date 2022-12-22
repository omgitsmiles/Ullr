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
import UserFeed from './components/UserFeedContainer'
import GroupsContainer from './components/GroupsContainer'
import Messages from './components/Messages'
import Testnav from './components/Testnav'
import UserProfile from './components/UserProfile'
import UserActivity from './components/User'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    dispatch(autoLogin())
  }, [])


  return (
    <div className="App">
        {!user ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/user/profile" element={<UserProfile />}/>
        <Route path="/activities/:id" element={<UserActivity />}/>
        <Route path="/user/feed" element={<UserFeed />}/>
        <Route path="/user/groups" element={<GroupsContainer />}/>
        <Route path="/user/gear" element={<Testgear />}/>
        <Route path="/user/messages" element={<Messages />}/>
        <Route path="test" element={<Testnav />}/>
      </Routes>
    </div>
  );
}

export default App;
