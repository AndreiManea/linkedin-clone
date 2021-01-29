import { Avatar } from '@material-ui/core'
import React from 'react'
import "./HeaderOption.css"
function HeaderOption({ avatar, Icon, title}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && <Avatar className="headerOption__icon" src={avatar}/>}
            <a to={`/${title}`} className="headerOption__title">{title}</a>
        </div>
    )
}

export default HeaderOption
