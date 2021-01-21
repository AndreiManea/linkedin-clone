import React from 'react'
import "./Feed.css"
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import VideocamIcon from '@material-ui/icons/Videocam';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MediaItem from './MediaItem/MediaItem';
import Post from './Post/Post';
import profilePic from '../../assets/Images/profile.jpg'
function Feed() {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let currentDate = `${date}/${month<10?`0${month}`:`${month}`}/${year}`;
    const buttonHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">

                <div className="feed__createContainer">
                    <CreateOutlinedIcon/>
                    <form onSubmit={buttonHandler}>
                        <input type="text" placeholder="Start a post"/>
                        <button type="submit">Send</button>
                    </form>
                    
                </div> 
                <div className="feed__mediaContainer">
                <MediaItem icon={<InsertPhotoIcon/>} text='Photo' color='#70b5f9'/>
                <MediaItem icon={<VideocamIcon/>} text='Video' color='#7fc15e'/>
                <MediaItem icon={<EventIcon/>} text='Event' color='#e7a33e'/>
                <MediaItem icon={<AssignmentIcon/>} text='Article' color='#f5987e'/>
                </div>
            </div>
            <Post userName= 'Andrei Codes' 
                  userFollowers= '280'
                  date = {currentDate}
                  userImg = {profilePic} 
                  description = 'First post, so excited to post this layout.
                                Lorem ipsum dolor sit amet consectetur adicing
                                elit. Molestias tempora maiores veniam vitae velit,
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus pariatur, doloribus obcaecati veritatis at fugiat! Molestias similique aliquid laudantium quisquam esse adipisci repellat labore facilis rerum, vitae facere itaque quod.
                                architecto amet exercitationem esse officia.'                        
                  postImg='https://images.unsplash.com/photo-1432265910742-819d660410b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                  likes= '270'
                  profileImg={profilePic}/>
            <Post userName= 'Andrei Codes' 
                  userFollowers= '280'
                  date = {currentDate}
                  userImg = {profilePic} 
                  description = 'First post, so excited to post this layout.
                                Lorem ipsum dolor sit amet consectetur adicing
                                elit. Molestias tempora maiores veniam vitae velit,
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus pariatur, doloribus obcaecati veritatis at fugiat! Molestias similique aliquid laudantium quisquam esse adipisci repellat labore facilis rerum, vitae facere itaque quod.
                                architecto amet exercitationem esse officia.'                        
                  postImg='https://images.unsplash.com/photo-1432265910742-819d660410b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                  likes= '270'
                  profileImg={profilePic}/>
            <Post userName= 'Andrei Codes' 
                  userFollowers= '280'
                  date = {currentDate}
                  userImg = {profilePic} 
                  description = 'First post, so excited to post this layout.
                                Lorem ipsum dolor sit amet consectetur adicing
                                elit. Molestias tempora maiores veniam vitae velit,
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus pariatur, doloribus obcaecati veritatis at fugiat! Molestias similique aliquid laudantium quisquam esse adipisci repellat labore facilis rerum, vitae facere itaque quod.
                                architecto amet exercitationem esse officia.'                        
                  postImg='https://images.unsplash.com/photo-1432265910742-819d660410b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                  likes= '270'
                  profileImg={profilePic}/>
        </div>
    )
}

export default Feed
