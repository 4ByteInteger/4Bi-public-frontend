import React from "react";
import "../styles/hero.scss";
import { applyNowModel } from "../apply-now-model";
import hero from "../../../images/hero.svg";

export const HeroSection = () => {
    return <div className="hero-section-container">
        <div className="left">
            <h1>Upskill for professional excellence</h1>
            <p>Social learning and expert-led programs to start, transition or boost your career</p>
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
            <img src={hero} alt="4byteinteger hero image" />
        </div>
        <div className="next-batch-details fr-aic jc-c g-10">
            <span>Our Next DSA Batch is Starting on 15 November 2023</span>
            <button onClick={() => applyNowModel.status$.set(true)}>Enroll Now</button>
        </div>
    </div>;
}