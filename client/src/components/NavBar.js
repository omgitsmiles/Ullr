import React, { useState } from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import { SidebarData } from "./SidebarData"
import { Avatar } from "@material-ui/core"
import { selectUser } from "../features/sessionSlice"
import { useSelector } from "react-redux"
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import "../App.css";

function Navbar() {
  const currentUser = useSelector(selectUser)
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const handleUser = () => {
    navigate("/user/profile")
  }

  return (
    <div>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <span className="notifications">
          <Tooltip title="profile">
              <Badge color="info">
              <IconButton onClick={handleUser} sx={{ p: 0 }}>
                <Avatar src={currentUser?.picture}/>
              </IconButton>
              </Badge>
          </Tooltip>
          </span>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;