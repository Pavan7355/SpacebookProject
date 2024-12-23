import React from "react";
import './leftbar.css';
import { MdRssFeed,MdOutlineChat,MdOutlineVideoSettings,MdGroups2
,MdBookmark,MdWorkOutline,MdOutlineEvent } from "react-icons/md";
import { BsQuestionSquare } from "react-icons/bs";
import {FaGraduationCap  } from "react-icons/fa";

function Leftbar(){
    return(
        <>
        <div className="leftbar">
            <div className="leftbarwrapper">
                <ul className="leftbarList">
               <li className="leftbarListItems">
                <MdRssFeed className="leftbarIcon"/>
                <span className="leftbarListItemText">Feed</span></li>
                <li className="leftbarListItems">
                <MdOutlineChat className="leftbarIcon"/>
                <span className="leftbarListItemText">Chat</span></li>
                <li className="leftbarListItems">
                <MdOutlineVideoSettings className="leftbarIcon"/>
                <span className="leftbarListItemText">Videos</span></li>
                <li className="leftbarListItems">
                <MdGroups2 className="leftbarIcon"/>
                <span className="leftbarListItemText">Groups</span></li>
                <li className="leftbarListItems">
                <MdBookmark className="leftbarIcon"/>
                <span className="leftbarListItemText">Bookmarks</span></li>
                <li className="leftbarListItems">
                <BsQuestionSquare className="leftbarIcon"/>
                <span className="leftbarListItemText">Questions</span></li>
                <li className="leftbarListItems">
                <MdWorkOutline className="leftbarIcon"/>
                <span className="leftbarListItemText">Jobs</span></li>
                <li className="leftbarListItems">
                <MdOutlineEvent className="leftbarIcon"/>
                <span className="leftbarListItemText">Event</span></li>
                <li className="leftbarListItems">
                <FaGraduationCap className="leftbarIcon"/>
                <span className="leftbarListItemText">Courses</span></li>    

                </ul>
<button className="leftbarButton">Show More</button>
<hr className="leftbarhr"/>
<ul className="leftbarFriendList">
<li className="leftbarFriend">
    <img className="leftbarFriendImg" src="rohit.jpg" alt="rohitsharma"/>
    <span className="leftbarFriendName">Rohit Sharma</span>
</li>
<li className="leftbarFriend">
    <img className="leftbarFriendImg" src="dhoni.jpg" alt="dhoni"/>
    <span className="leftbarFriendName">MS Dhoni</span>
</li>
<li className="leftbarFriend">
    <img className="leftbarFriendImg" src="sachin.jpg" alt="sachin"/>
    <span className="leftbarFriendName">Sachin Tendulkar</span>
</li>
<li className="leftbarFriend">
    <img className="leftbarFriendImg" src="rahul.jpg" alt="rahul"/>
    <span className="leftbarFriendName">K L Rahul</span>
</li>
<li className="leftbarFriend">
    <img className="leftbarFriendImg" src="hardik.jpg" alt="hardik"/>
    <span className="leftbarFriendName">Hardik Pandya</span>
</li>

</ul>
            </div>
        </div>
        </>
    )
}

export default Leftbar;