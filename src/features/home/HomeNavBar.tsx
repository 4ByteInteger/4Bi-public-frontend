import React from "react";
import "./styles/home-navbar.scss";

export const HomeNavBar = () => {

    return (
        <div className="home-navbar-container fr-aic jc-sb">
            <div className="left">
                <img src={"./images/inner_logo.svg"} className="logo" alt="4ByteInteger Logo" />
            </div>
            <div className="right">
                <a href="#courses">Courses</a>
                <a href="#instructors">Instructors</a>
                <a href="#faqs">FAQ</a>
            </div>
        </div>
    );
}