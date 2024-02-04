import React from "react";
import "./index.scss";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { TopicsList } from './components/TopicsList';
import { Banner } from './components/Banner';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { applyNowModel } from "../home/apply-now-model";

const perks = [
    "Efficient building of Frontend components",
    "In depth concepts of using Redux",
    "Real worlds projects",
    "Collaboration with other peers",
    "Weekends 3hr live class"
];

const courseOutcomes = [
    "Javascript modules",
    "DOM & VDOM",
    "Class Components",
    "JSX, Conditional rendering",
    "Event bubbling & Capturing",
    "Props & State",
    "Component lifecycle",
    "Pure components",
    "Higher order Components",
    "Functional components",
    "Hooks",
    "Custom hooks",
    "react router",
    "localStorage Vs sessionStorage",
    "Cookies",
    "indexDB",
    "State Management",
    "Redux underlying architecture",
    "Async Javascript recap",
    "Redux and redux-saga",
    "Real world projects",
    "Building Whiteboard using Redux",
    "Excel Sheet using Redux",
];

export const CrashCourses = () => {
    const openEnrollModal = () => {
        applyNowModel.actions.toggleModal();
    };

    return (
        <div className="crash-course-root">
            <Banner openEnrollModal={openEnrollModal} />
            <div className="header fr-aic">
                <div className='points'>
                    <h1 style={{ margin: 0 }}>React & Redux</h1>
                    <p>The art of State Management using Redux</p>
                    <ul>
                        {
                            perks.map((perk, index) => {
                                return (
                                    <li className='fr-aic g-10' style={{ flexWrap: "nowrap" }} key={index} >
                                        <CheckCircleIcon className='check-icon' />
                                        <span>{perk}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='price-details'>
                        <span>₹ 2,999 + GST</span>
                        <del>₹ 4,000</del>
                        <span className='discount'>25 % Off</span>
                        <span className='discount'>Life time access</span>
                    </div>
                    <button className='enroll-btn' onClick={openEnrollModal}>Enroll Now!</button>
                </div>
                <div className="iframe-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/myfQoJsOdjY?si=Xx6WQ4RImWRQh0Jw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                </div>
            </div>
            <TopicsList />
            <div className="instructor">
                <h2 className="subtitle">Instructor</h2>
                <div className="details">
                    <img src={"../../images/aravind_circles.svg"} alt="Aravind Samudrala" width={300} height={300} />
                    <div className="fc">
                        <div>
                            <h3 className="fr-aic g-20">Aravind Samudrala <a target="_blank" href="https://www.linkedin.com/in/samudrala-aravind-13599b172/"><LinkedInIcon style={{ color: "#fff" }} /></a></h3>
                            <span style={{ color: "#A6ACBA" }}>Founder 4byteinteger | SWE2 BlueYonder | Ex BlackBuck</span>
                        </div>
                        <p style={{ color: "#A6ACBA" }}>
                            Aravind Samudrala, an NIT Warangal alumnus and the founder of 4byteinteger, currently serves as a software engineer at BlueYonder. He has previously contributed his expertise to BlackBuck. Aravind has an extensive mentoring background, having guided over 4,000 students in frontend development across various companies such as Prepbytes, the10xacademy, and Acciojob.
                        </p>
                    </div>
                </div>
            </div>
            <div className="course-outcomes">
                <h2 className="subtitle">Course outcomes</h2>
                <div className="list">
                    {
                        courseOutcomes.map((outcome, index) => {
                            return <div key={index} className="fr-aic g-10">
                                <CodeIcon />
                                <span>{outcome}</span>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}