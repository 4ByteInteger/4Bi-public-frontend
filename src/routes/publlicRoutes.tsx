import React, { useEffect } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Home } from "../features/home";
import { CourseDetailsSurface } from "../features/course-details";
import { Footer } from "../features/home/components/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RouteWrapper = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route Component={RouteWrapper}>
          <Route path="/" Component={Home} />
          <Route
            path="/course-details/:courseId"
            Component={CourseDetailsSurface}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
