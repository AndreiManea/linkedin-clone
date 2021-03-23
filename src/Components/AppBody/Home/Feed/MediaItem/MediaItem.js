import React from 'react'
import './MediaItem.css'


function MediaItem({ click = null, icon, text = null, color }) {

    return (
        <div onClick={click} className="mediaItem" style={{ color: color }}>
            {icon}
            <p>{text}</p>
        </div>
    )
}

export default MediaItem
