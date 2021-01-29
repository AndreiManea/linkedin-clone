import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import SendIcon from '@material-ui/icons/Send';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import MediaItem from '../MediaItem/MediaItem';
import './Post.css'
function Post({userName, userFollowers, date, time, userImg, description, postImg, likes, profileImg}) {
    return (
        <div className="post">
            <div className="post__top">
                <div className="post__user">
                    <img src={userImg} alt="" className="post__userImg"/>
                    <div className="post__userInfo">
                        <p className="post__userName">
                            {userName}
                        </p>
                        <p className="post__userFollowers">
                            {userFollowers} followers
                        </p>
                        <p className="post__date">{date} at {time}</p>
                    </div>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className="post__bottom">
                <div className="post__container">
                    <p className="post__description">
                    {description}
                    </p>
                    <img src={postImg} alt="" className="post__img"/>
                    <MediaItem icon={<ThumbUpAltIcon/>} text={likes} color="#116B9E"/>
                </div>
                <div className="post__inputContainer">            
                    <div className="post__mediaItems">
                        <MediaItem icon={<ThumbUpAltOutlinedIcon/>} text="Like" color="656565"/>
                        <MediaItem icon={<ChatOutlinedIcon/>} text="Comment" color="656565"/>
                        <MediaItem icon={<ShareOutlinedIcon/>} text="Share" color="656565"/>
                        <MediaItem icon={<SendIcon/>} text="Send" color="656565"/>
                    </div>
                    <div className="post__inputForm">
                        <img src={profileImg} alt="" className="post__inputImg"/>
                        <form action="">
                            <input type="text" placeholder="Add a comment..."/>
                            <button type="submit">Send</button>
                            <div className="post__inputIcons">
                                <MediaItem icon={<EmojiEmotionsOutlinedIcon/>}  color="656565"/>
                                <MediaItem icon={<ImageOutlinedIcon/>}  color="656565"/>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Post
