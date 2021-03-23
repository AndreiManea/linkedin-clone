import React from 'react';
import logo from '../../../assets/Images/logo.png'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption/HeaderOption';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
function Header({ logout }) {
    const user = useSelector(selectUser)
    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" link="/home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" link="/network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" link="/jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" link="/messages" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={user?.photoUrl} title="Me" />
                <button onClick={logout}>Log out</button>
            </div>
        </div>
    )
}

export default Header
