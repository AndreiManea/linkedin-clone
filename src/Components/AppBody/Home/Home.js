import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Widgets from './Widgets/Widgets'
import Feed from './Feed/Feed'
import './Home.css'
function Home() {
    return (
        <div className="home">
            <Sidebar/>
            <Feed/>
            <Widgets/>
        </div>
    )
}

export default Home
