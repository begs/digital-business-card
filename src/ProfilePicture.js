import React from "react";
import profilePicture from "./images/vegard.jpeg"


export default function ProfilePicture () {
    return (
        <div className="pic-container">
            <img className="profile-img" src={profilePicture}></img>
        </div>
    )
}
