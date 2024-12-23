import React from "react";
import './centerbar.css';
import Share from "./Share";
import Post from "./Post";
function Centerbar(){
    return(
        <>
      <div className="centerbar">
        <div className="centerbarWrapper">
          <Share/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
        </>
    )
}

export default Centerbar;