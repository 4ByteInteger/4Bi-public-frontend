import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Home } from "../features/home";
import { CourseDetailsSurface } from "../features/course-details";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("inside");
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
            </Routes>
        </BrowserRouter>
    );
}