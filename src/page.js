import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content"
import Footer from "./Footer"
import ProfilePicture from "./ProfilePicture"
import Style from "./style.css"

export default function Page () {
    return (
        <div className="page-container">
            <ProfilePicture />
            <Content />
            <Footer />
        </div>
    )
}
