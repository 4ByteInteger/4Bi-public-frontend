import { ObservableObject } from "@legendapp/state";
import { observer } from "@legendapp/state/react";
import React from "react";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { ICourseItem } from "../home-types";
import "../styles/course-list.scss";
import { applyNowModel } from "../apply-now-model";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from "react-router-dom";

interface Props {
  coursesList$: ObservableObject<ICourseItem[]>;
}

export const CoursesList: React.FC<Props> = observer(({ coursesList$ }) => {
  const coursesList = coursesList$?.get?.();

  const toggleApplyNowModal = (courseValue: string) => {
    applyNowModel.selectedCourse = courseValue;
    applyNowModel.status$.set(old => !old)
  }

  return (
    <section className="our-courses" id="courses">
      <div className="section-title">Our Courses</div>
      <div className="courses">
        {coursesList?.map?.((course) => {
          return (
            <div className="course-item" key={course.courseId}>
              <div className="header fr-aic g-10" style={{ backgroundImage: `url(${course.imageUrl})` }}>
                <b className="badge">{course.courseType}</b>
              </div>
              <div className="body">
                <div className="body-top">
                  <div className="fr-aic g-10">
                    <BookmarksIcon />
                    <h4>{course.courseName}</h4>
                  </div>
                  <div className="chips fr-aic">
                    <div className="chip fr-aic g-10">
                      <AlarmOnIcon />
                      <span>{`Duration: ${course.duration} Months`}</span>
                    </div>
                  </div>
                  <p>{course.description}</p>
                </div>
                <div className="fr-aic g-10 title">
                  <SchoolOutlinedIcon />
                  <b>Curriculum</b>
                </div>
                <div className="fc g-10 curriculum-points">
                  {course?.curriculumPoints?.map((point, index) => {
                    return (
                      <div className="fr-aic g-10 point" key={index}>
                        <CheckCircleOutlineOutlinedIcon className="icon" />
                        <span className="text">{point}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="footer fr-aic jc-sb g-10">
                <button className="btn-apply" onClick={() => toggleApplyNowModal(course.identifier)}>Get a callback</button>
                <Link to={course.link} className="btn-apply link fr-aic jc-c g-10">
                  <span>View Details</span>
                  <ChevronRightIcon style={{ fontSize: "16px" }} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});
