import React from "react";
import "../styles/course-list.scss";
import { Link } from "react-router-dom";
import { coursesList } from "../home-model";

export const CoursesList = () => {
  return (
    <section className="our-courses" id="courses">
      <div className="section-title">
        Our Premier Quality Program
        <p>For SDE Roles</p>
      </div>
      <div className="courses">
        {coursesList?.map?.((course, i) => {
          return (
            <div className="course-item" key={course.courseId}>
              <div className={`header course${i + 1}`}>
                <p className="title">{course.courseName}</p>
                <span className="duration">{course.duration}</span>
              </div>
              <div className="body">
                <div className="fr-aic g-10 title">
                  <span className="material-icons">school</span>
                  <b>What we offer ?</b>
                </div>
                <div className="fc g-10 curriculum-points">
                  {course?.outcomes?.map((point, index) => {
                    return (
                      <div className="fr-aic g-10 point" key={index}>
                        <span className="material-icons">{point.icon}</span>
                        <span className="text">{point.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <Link
                to={`/course-details/${course.courseId}`}
                className="fr-aic jc-c learn-more"
              >
                <span>Learn More</span>
                <span className="material-icons">chevron_right</span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
