import React from "react";
import "../styles/index.scss";
import { DsaTopicsList } from "../dsa-topics-list";

export const DsaCourseDetails = () => {
    return (
        <section className="root-course-details-container">
            <div className="shortcut-menu">
                {
                    DsaTopicsList.map((item, index) => {
                        return (
                            <div className="item">
                                {item.displayText}
                            </div>
                        );
                    })
                }
            </div>
            <div className="content"></div>
        </section>
    );
}