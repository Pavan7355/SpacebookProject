import React from "react";
import './rightbar.css';
function Rightbar(){
    return(
        <>
    <div className="rightbar">
        <div className="rightbarWrapper">
            <div className="birthdayContainer">
            <img src="gift.jpg" alt="gift" className="birthdayImg"/>
            <span className="birthdayText"><b>MS Dhoni</b> and <b>2 other Friends
                </b> have a birthday today</span>
            </div>
            <img className="rightbarAd" src="advertisement.jpg" alt="ads"/>
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="friendList">
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainr">
         <img src="sachin.jpg"  alt="sachin" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Sachin Tendulkar</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainr">
                 <img src="dhoni.jpg"  alt="Dhoni" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">MS Dhoni</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainr">
            <img src="rohit.jpg"  alt="rohit" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Rohit Sharma</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainr">
                <img src="rahul.jpg"  alt="rahul" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">K L Rahul</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainr">
                 <img src="hardik.jpg"  alt="hardik" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Hardik Pandya</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainr">
                <img src="chahal.jpg"  alt="chahal" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Yuzvendra Chahal</span>
                </li>
            </ul>
        </div>
    </div>
        </>
    )
}

export default Rightbar;