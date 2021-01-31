import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import VideocamIcon from '@material-ui/icons/Videocam';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MediaItem from './MediaItem/MediaItem';
import Post from './Post/Post';
import profilePic from '../../../../assets/Images/profile.jpg'
import { db } from '../../../../firebase/firebase';
import firebase from 'firebase'
function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);
    const [img, setImg] = useState("");
    
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
        getImg();
    }, [])



    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let currentDate = `${date}/${month<10?`0${month}`:`${month}`}/${year}`;
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    async function getImg() {
       await fetch('https://source.unsplash.com/random').then(response => (setImg(response.url)));
    }

    const sendPost = (e) => {
        e.preventDefault();
        getImg();
        console.log(img);
        db.collection('posts').add({
            userName: 'Andrew Macer',
            userImg: profilePic,
            userFollowers: Math.floor(Math.random() * Math.floor(99999)),
            date: currentDate,
            time,
            description: input,
            postImg: img,
            likes:  Math.floor(Math.random() * Math.floor(1500)),
            profileImg: profilePic,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__createContainer">
                    <CreateOutlinedIcon/>
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Start a post"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                    
                </div> 
                <div className="feed__mediaContainer">
                <MediaItem icon={<InsertPhotoIcon/>} text='Photo' color='#70b5f9'/>
                <MediaItem icon={<VideocamIcon/>} text='Video' color='#7fc15e'/>
                <MediaItem icon={<EventIcon/>} text='Event' color='#e7a33e'/>
                <MediaItem icon={<AssignmentIcon/>} text='Article' color='#f5987e'/>
                </div>
            </div>
            {posts.map(({id, data: {userName, userFollowers, date, time, userImg, description, postImg, likes, profileImg}}) => (
                <Post   
                        key={id}
                        userName={userName}
                        userFollowers={userFollowers}
                        date={date}
                        time={time}
                        userImg={userImg} 
                        description={description} 
                        postImg={postImg} 
                        likes={likes} 
                        profileImg={profileImg} />
            ))}
        </div>
    )
}

export default Feed
