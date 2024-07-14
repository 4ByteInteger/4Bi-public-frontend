import React from "react";
import "../styles/instructor-testimonials.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { instructors } from "../home-model";

export const InStructorTestimonials = () => {
  return (
    <section className="instructor-testimonials-container" id="instructors">
      <div className="header">
        <h2>Instructors</h2>
        <p className="section-title">
          Our instructors are prepared to help you unleash your full potential.
        </p>
      </div>
      <div className="instructor-cards fr-aic">
        {instructors?.map?.((instructor, index) => {
          return (
            <div className="instructor-card" key={index}>
              <div className="fr-aic jc-sb header">
                <img
                  className="profile-image"
                  src={instructor.imageUrl}
                  alt="instructor"
                />
                <a href={instructor.linkedinUrl} target="_blank">
                  <LinkedInIcon className="linkedin-icon" />
                </a>
              </div>
              <h3>{instructor.name}</h3>
              <p>{instructor.description}</p>
              <p className="college">{instructor.college}</p>
              <div className="fr-aic jc-sb" style={{ alignItems: "flex-end" }}>
                <span>{instructor.designation}</span>
                <img
                  src={instructor.companyLogoUrl}
                  alt="Company Logo"
                  className="company-logo"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
