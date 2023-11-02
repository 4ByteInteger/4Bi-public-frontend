import React, { useState } from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import "./styles/curriculum.scss";

const width = window.innerWidth;

export const Curriculum = ({ topics }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="curriculum-root-container">
            <div className="curriculum-container">
                <h2 className="title">Program Curriculum</h2>
                <div className="container">
                    <div className={`topics-list ${width > 600 ? 'fc' : 'fr-aic'}`} style={{ flexWrap: 'nowrap' }}>
                        {
                            topics.map(({ title }, index) => {
                                return (
                                    <div key={index} className={index === activeIndex ? "active" : ""} onClick={() => setActiveIndex(index)}>
                                        {title}
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="topic-details fc g-10">
                        <h3 className="subtitle">{topics[activeIndex].title}</h3>
                        {
                            topics[activeIndex].subtopics.map((subtopic, index) => {
                                return (
                                    <div key={index} className="sub-topic">
                                        <TaskAltIcon className="icon" />
                                        <span className="name">{subtopic}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}