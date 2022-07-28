import React from "react";
import twitterIcon from "./icons/twitter-icon.png"
import facebookIcon from "./icons/facebook-icon.png"
import instagramIcon from "./icons/instagram-icon.png"
import githubIcon from "./icons/github-icon.png"



export default function Footer () {
    return (
        <div className="footer-container">
            <img src={twitterIcon}></img>
            <img src={facebookIcon}></img>
            <img src={instagramIcon}></img>
            <img src={githubIcon}></img>
        </div>
    )
}
