import React from "react";
import "./styles/instructor-details.scss";

export const InstructorDetails = ({ data }: { data: any }) => {
    return (
        <>
            <h2 style={{ textAlign: 'center', margin: "20px 0" }}>Know Your Instructor</h2>
            <div className="instructor-details-container">
                <img src={data.imageUrl} alt="Aravind Circles image" />
                <div className="details fc jc-se">
                    <h2>{data.name}</h2>
                    <p>
                        {data.description}
                    </p>
                    <div className="byline-text">
                        {data.college}
                    </div>
                    <div className="fr-aic jc-sb byline-text">
                        <span>{data.designation}</span>
                    </div>
                </div>
            </div>
        </>
    );
}