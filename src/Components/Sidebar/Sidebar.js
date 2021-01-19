import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import AddIcon from '@material-ui/icons/Add';
import profilePic from '../../assets/Images/profile.jpg'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1506057278219-795838d4c2dd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlYWNlfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                <Avatar className="sidebar__profile" src={profilePic}/>
                <h2 className="sidebar__name">Andrei Codes</h2>
                <h4 className="sidebar__job">Front-End Developer</h4>
                <hr/>
                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who viewed your profile</p>
                        <p className="sidebar__statNumber">3,425</p>
                    </div>
                    <div className="sidebar__stat">
                        <p>Connections</p>
                        <p className="sidebar__statNumber">240</p>
                    </div>
            </div>
            </div>
            
            <div className="sidebar__bottom">
                <div className="sidebar__links">
                    <div className="sidebar__link sidebar__link--recent">
                        <p>Recent</p>
                        <ExpandMoreIcon className="sidebar__dropdown"/>
                    </div>
                    <div className="sidebar__hashtags">
                            <div className="sidebar__hashtag">
                                <LabelImportantIcon/>     
                                <p>webdevelopment</p>
                            </div>
                            <div className="sidebar__hashtag">
                                <LabelImportantIcon/>     
                                <p>webdesign</p>
                            </div>
                            <div className="sidebar__hashtag">
                                <LabelImportantIcon/>     
                                <p>html</p>
                            </div>
                        </div>
                    <div className="sidebar__link">
                        <p>Groups</p>
                    </div>
                    <div className="sidebar__link">
                        <p>Events</p>
                        <AddIcon className="sidebar__plus"/>
                    </div>
                    <div className="sidebar__link">
                        <p>Followed Hashtags</p>
                        <ExpandMoreIcon className="sidebar__dropdown"/>
                    </div>
                    <div className="sidebar__hashtags">
                            <div className="sidebar__hashtag">
                                <LabelImportantIcon/>     
                                <p>webdevelopment</p>
                            </div>
                            <div className="sidebar__hashtag">
                                <LabelImportantIcon/>     
                                <p>webdesign</p>
                            </div>
                            <div className="sidebar__hashtag">
                                <LabelImportantIcon/>     
                                <p>html</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
