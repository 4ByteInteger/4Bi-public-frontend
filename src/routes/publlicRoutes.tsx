import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Home } from "../features/home";
import { CourseDetailsSurface } from "../features/course-details";
import { GlobalSnackBar } from "../components/snackbar/GlobalSnackBar";
import { CrashCourses } from "../features/crash-courses";
import { ApplyNow } from "../features/home/ApplyNow";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/course-details/:courseId" Component={CourseDetailsSurface} />
                <Route path="/react-redux/course-details" Component={CrashCourses} />
            </Routes>
            <GlobalSnackBar />
            <ApplyNow />
        </BrowserRouter>
    );
}