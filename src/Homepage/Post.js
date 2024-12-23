import React from "react";
import './post.css';
import { FiMoreVertical } from "react-icons/fi";

function Post(){
    return(
        <>
        <div className="post">
<div className="postWrapper">
<div className="postTop">
    <div className="postTopLeft">
        <img src="kohli.jpg" alt="kohli" className="postProfileImg"/>
        <span className="postUserName">Virat Kohli</span>
        <span className="postDate">10 mins ago</span>
    </div>
    <div className="postTopRight">
    <FiMoreVertical/>
    </div>
</div>
<div className="postCenter">
    <span className="postText">The only thing we have is the MOMENT</span>
    <img src="kholi1.jpg"  alt="Kholi1" className="postImg"/>
</div>
<div className="postBottom">
    <div className="postButtonLeft">
        <img src="Heart.jpg" alt="heart" className="heartIcon"/>
        <img src="like.jpg" alt="like" className="likeIcon"/>
        <span className="postlikeCounter">769583983 people like it</span>
    </div>
    <div className="postButtonRight">
        <span className="postCommentCounter">578 comments</span>
    </div>
</div>
</div>

        </div>
        </>
    )
}

export default Post;