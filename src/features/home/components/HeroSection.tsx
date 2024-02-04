import React, { useEffect, useState } from "react";
import "../styles/hero.scss";
import { applyNowModel } from "../apply-now-model";
// import hero from "../../../images/hero.svg";


export const HeroSection = () => {
    return <div className="hero-section-container">
        <div className="left">
            <h1>Code, Create, Conquer</h1>
            <p>Opportunity to boost your career with comprehensive and interactive expert-led programs.</p>
            <p style={{ color: 'white' }}>Trusted By</p>
            <div className="fr-aic g-10 items">
                <div className="item1 item fc jc-c">
                    <b>3.5K +</b>
                    <span>Learners</span>
                </div>
                <div className="item2 item fc jc-c">
                    <b>200 +</b>
                    <span>Placed</span>
                </div>
            </div>
        </div>
        <div className="right">
            <img src={"./images/hero.svg"} alt="4byteinteger hero image" />
        </div>
    </div>;
}