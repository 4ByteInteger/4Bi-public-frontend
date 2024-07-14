import React, { useState } from "react";
import "./styles/course-details.scss";
import { useParams } from "react-router-dom";
import { curriculum } from "./data";

export const CourseDetailsSurface = () => {
  const { courseId } = useParams();

  const [selectedModule, setSelectedModule] = useState(0);
  const course = curriculum[courseId];
  console.log(course);

  if (!course) {
    return null;
  }

  const module = course.modules[selectedModule];

  return (
    <div className="course-details-container">
      <h1 className="title">Our Curriculum</h1>
      <section className="curriculum">
        <div className="module-cards">
          {course.modules.map((module, index) => {
            const active = index === selectedModule;
            return (
              <div
                onClick={() => setSelectedModule(index)}
                className={`module-card ${active ? "active-module" : ""}`}
                key={index}
              >
                <b className="brand-color">{module.title}</b>
                <p>{module.name}</p>
              </div>
            );
          })}
        </div>
        <div className="module-details">
          <h3 className="brand-color">{`${module.title} - ${module.name}`}</h3>
          <div className="brand-color fr-aic g-10">
            <span className="material-icons">calendar_month</span>
            <b>Duration: {module.duration}</b>
          </div>
          <p className="description">{module.description}</p>
          <div>
            <b className="brand-color">Topics</b>
            <ul className="topics-list">
              {module.topics.map((topic, index) => {
                return <li key={index}>{topic}</li>;
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
