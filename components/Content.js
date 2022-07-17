import React from "react";

export default function Content () {
    return (
        <div className="content-container">
            <h1 className="name">Vegard Valvik</h1>
            <h2 className="job-title">Frontend Developer</h2>
            <h3 className="website-link">vegs.no</h3>
            <div className="button-container">
                <button className="button email-button"><img src="./icons/email-icon.png" className="button-icon"></img>Email</button>
                <button className="button linkedin-button"><img src="./icons/linkedin-icon.png" className="button-icon linkedin-icon"></img>LinkedIn</button>
            </div>
            
            <div className="text-container">
                <h2 className="text-title">About</h2>
                <p className="text-content">I am a soon-to-be frontend developer with a particular interest
                in writing clean and efficient code. I love learning new things and I'm
                currently learning React and JavaScript.</p>
            </div>
            
            <div className="text-container">
                <h2 className="text-title">Interest</h2>
                <p className="text-content">I love the outdoors and really enjoy climbing and 
                bouldering. I do however also like calm movie-nights and playing video games with
                friends!</p>
            </div>
            
        </div>
    )
}