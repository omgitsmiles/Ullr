import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from 'react-redux';
import { logout } from "../features/sessionSlice";



export const SidebarData = [
  {
    title: "Home",
    path: "/user/feed",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "My Profile",
    path: "/user/profile",
    icon: <PersonIcon />,
    cName: "nav-text",
  },
  {
    title: "Groups",
    path: "/user/groups",
    icon: <Diversity1Icon />,
    cName: "nav-text",
  },
  {
    title: "Gear",
    path: "/user/gear",
    icon: <SnowshoeingIcon />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/user/messages",
    icon: <QuestionAnswerIcon />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/user/settings",
    icon: <SettingsIcon />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <LogoutIcon />,
    cName: "nav-text",
  },
];