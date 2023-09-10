/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./login.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const login = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    const [username, setUsername] = useState<string>("");
    const [passsword, setPassword] = useState<string>("");

    const navigate = useNavigate();

    const handleLoggedIn = () => {
        navigate("/dashboard");
        setLoggedIn(true);
        setTimeout(() => {
            setLoggedIn(false);
        }, 4000)
    }

    const handleUserName = (e:any) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e:any) => {
        setPassword(e.target.value)
    }

    return (
        <div className="mainLogin">
             {loggedIn === true && username === "admin" && passsword === "admin" &&( 
                <div className="successLogin"> Login Successfully </div>
            )}
            <div className="subLogin">
                <div className="loginName">
                    Notion Login
                </div>
                <div className="loginTxt">
                    <div className="username">
                        <input type="text"
                            onChange={(e)=> handleUserName(e)}
                        placeholder="Username"/>
                    </div>
                    <div className="password">
                        <input type="password"
                            onChange={(e)=> handlePassword(e)}
                        placeholder="Password"/>
                    </div>
                </div>
                <div className="loginBtn">
                    <button id="loginBtn" onClick={handleLoggedIn}> Login </button>
                </div>
            </div>            
        </div>
    )
}

export default login;