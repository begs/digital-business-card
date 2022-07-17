import React from "react";
import ReactDOM from "react-dom";
import Content from "./components/Content.js"
import Footer from "./components/Footer.js"
import ProfilePicture from "./components/ProfilePicture.js"

export default function Page () {
    return (
        <div className="page-container">
            <ProfilePicture />
            <Content />
            <Footer />
        </div>
    )
}