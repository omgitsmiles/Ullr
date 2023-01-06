import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, autoLogin } from './features/sessionSlice'
import { fetchGroups, selectAllGroups } from './features/groupsSlice'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Gear from './components/Gear'
import NavBar from './components/NavBar'
import UserFeed from './components/UserFeedContainer'
import GroupsContainer from './components/GroupsContainer'
import UserProfile from './components/UserProfile'
import Group from './components/Group'
import MessagesContainer from './components/MessagesContainer'
import UserSettings from './components/UserSettings'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const groups = useSelector(selectAllGroups)

  useEffect(() => {
    // fetch("/me")
    // .then(r => {
    //   if (r.ok) {
    //     r.json()
    //     .then(user => setUser(user))
    //   }
    // })
    dispatch(autoLogin())
    dispatch(fetchGroups())
  }, [dispatch])

  console.log(user)


  return (
    <div className="App">
      {user && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/user/profile" element={<UserProfile />}/>
        <Route path="/groups/:id" element={<Group groups={groups}/>}/>
        <Route path="/user/feed" element={<UserFeed />}/>
        <Route path="/user/groups" element={<GroupsContainer groups={groups}/>}/>
        <Route path="/user/gear" element={<Gear />}/>
        <Route path="/user/messages" element={<MessagesContainer />}/>
        <Route path="/user/settings" element={<UserSettings />}/>
      </Routes>
    </div>
  );
}

export default App;
