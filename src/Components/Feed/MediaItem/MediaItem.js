import React from 'react'
import './MediaItem.css'


function MediaItem({icon, text=null, color}) {
     
    return (
        <div className="mediaItem" style={{color: color}}>
                    {icon}
                    <p>{text}</p>
        </div>
    )
}

export default MediaItem
    