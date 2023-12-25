import React, { useEffect, useState } from "react";
import "../styles/hero.scss";
import { applyNowModel } from "../apply-now-model";
import hero from "../../../images/hero.svg";

const futureTime = new Date('2023-12-26T18:00:00');

function getTimer() {
    const timeDifference = futureTime - new Date();

    const seconds = Math.floor((timeDifference % 60000) / 1000);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    const timerString = `${days}days  :${hours}hrs  :${minutes}mins :${seconds}sec`;

    return timerString;
}


export const HeroSection = () => {

    const [timerText, setTimerText] = useState(getTimer());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimerText(getTimer());
        }, 1000)

        return () => {
            clearInterval(timerId);
        }
    }, []);

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
            <img src={hero} alt="4byteinteger hero image" />
        </div>
        <div className="next-batch-details fr-aic jc-c g-10">
            <span className="timer">{`${timerText} left`}</span>
            <span>Our Next DSA Batch is Starting on 20 December 2023</span>
            <button onClick={() => applyNowModel.status$.set(true)}>Enroll Now</button>
        </div>
    </div>;
}