import React from "react";
import './LoginPage.css';

function LoginPage(){
    return(
        <div className="Login">
            <div className="facebook">
                <div className="pentagontext">
                    Pentagon Space
                </div>
                <div className="title">
                   Mastering The Future  <br/>
                  Training and Placement Institute
                </div>
            </div>
            <div className="LoginContainer">
                <div className="Logindetails">
                    <input type="email" placeholder="Email address or phone number"/>
                    <br/>
                    <input type="password" placeholder="Password"/>
                    <br/>
                    <button className="btn">Login</button>
                </div>
                    <div className="forget">
                        <a href="forget">Forgotten Password</a>
                        <br/>
                       <button className="btns">
                            Create New Account
                        </button>
                    </div>
            </div>
         </div>
    )
}

export default LoginPage;