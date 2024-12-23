import React from "react";
import './Share.css'
import { GoFileMedia } from "react-icons/go";
import { AiOutlineTags } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmojiEmotions } from "react-icons/md";

function Share(){
    var Style1={color:"blue"};
    var Style2={color:"red"};
    var Style3={color:"green"};
    var Style4={color:"yellow"};
    return(
        <>
        <div className="share">
            <div className="shareWrapper">
<div className="shareTop">
    <img src="kohli.jpg" alt="Kholi" className="shareProfileImg"/>
    <input placeholder="what's in your mind Raj"
    className="shareInput"/>
</div>
<hr className="shareHr"/>
<div className="shareButton1">
    <div className="shareOptions">
        <div className="shareOption">
        <GoFileMedia style={Style2}className="shareIcon"/>
            <span className="shareOptionText">Photo/video</span>
        </div>
        <div className="shareOption">
        <AiOutlineTags style={Style1}className="shareIcon"/>
            <span className="shareOptionText">Tag</span>
        </div>
        <div className="shareOption">
        <CiLocationOn style={Style3}className="shareIcon"/>
            <span className="shareOptionText">Location</span>
        </div>
        <div className="shareOption">
        <MdOutlineEmojiEmotions style={Style4}className="shareIcon"/>
            <span className="shareOptionText">Feelings</span>
        </div>
        <button className="shareButton">Share</button>
    </div>
    
</div>

            </div>
        </div>
        </>
    )
}

export default Share;