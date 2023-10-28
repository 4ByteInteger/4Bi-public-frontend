import React from "react";
import "./styles/home-navbar.scss";
import { applyNowModel } from "./apply-now-model";
import InnerLogo from "../../images/inner_logo.svg";

export const HomeNavBar = () => {
    const openApplyNowModal = () => {
        applyNowModel.actions.toggleModal();
    }

    return (
        <div className="home-navbar-container fr-aic jc-sb">
            <div className="left">
                <img src={InnerLogo} className="logo" alt="4ByteInteger Logo" />
            </div>
            <div className="right">
                <a href="#courses">Courses</a>
                <a href="#instructors">Instructors</a>
                <a href="#faqs">FAQ</a>
                <button onClick={openApplyNowModal}>Get Callback</button>
            </div>
        </div>
    );
}