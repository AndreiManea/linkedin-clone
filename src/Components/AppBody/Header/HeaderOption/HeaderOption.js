import { Avatar } from '@material-ui/core'
import React from 'react'
import {NavLink} from 'react-router-dom'
import "./HeaderOption.css"
function HeaderOption({ avatar, Icon, title, link}) {
    return (
        <div className="headerOption">
            <NavLink className="headerOption__link" activeClassName="active" to={`${link}`}>
            {Icon && <Icon className='headerOption__icon'  />}
            {avatar && <Avatar className="headerOption__icon" src={avatar}/>}
            {title}
            </NavLink>
    </div>
    )
}

export default HeaderOption
