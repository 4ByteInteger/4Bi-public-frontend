import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../features/home";
import { FrontEndCourseDetails } from "../features/course-details/frontend";
import { CourseDetailsSurface } from "../features/course-details";

export const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/course-details/:courseId" Component={CourseDetailsSurface} />
            </Routes>
        </BrowserRouter>
    );
}