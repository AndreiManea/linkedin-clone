import React from 'react'
import './AppBody.css'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Feed from './Feed/Feed'
import Widgets from './Widgets/Widgets'
function AppBody() {
    return (
        <div className="appBody"> 
            <Header />
            <div className="appBody__body">
            <Sidebar /> 
            <Feed/> 
            <Widgets/> 
            </div>   
        </div>
    )
}

export default AppBody
