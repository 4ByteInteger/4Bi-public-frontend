import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../features/home";
import { DsaCourseDetails } from "../features/course-details/dsa";
import { FrontEndCourseDetails } from "../features/course-details/frontend";

export const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/dsa-course-details" Component={DsaCourseDetails} />
                <Route path="/frontend-course-details" Component={FrontEndCourseDetails} />
            </Routes>
        </BrowserRouter>
    );
}