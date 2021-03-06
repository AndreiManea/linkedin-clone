import React from 'react';
import logo from '../../assets/Images/logo.png'
import profilePic from '../../assets/Images/profile.jpg'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from '../HeaderOption/HeaderOption';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt=""/>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="My Network"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar={profilePic} title="me"/>
            </div>
        </div>
    )
}

export default Header
