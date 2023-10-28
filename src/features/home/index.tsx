import React, { useEffect, useRef } from "react";
import { createHomeScreenModel } from "./home-model";
import { LSReloadingWrapper } from "../../network/components/LSReloadingWrapper";
import { CoursesList } from "./ls-components/CoursesList";
import { ApplyNow } from "./ApplyNow";
import { InStructorTestimonials } from "./ls-components/InStructorTestimonials";
// import { PlacementEssentials } from "./components/PlacementEssentials";
// import { OurHighLights } from "./components/OurHighLights";
import { Presentations } from "./components/Presentations";
import { HeroSection } from "./components/HeroSection";
import { HomeNavBar } from "./HomeNavBar";
import { FAQs } from "./components/FAQs";

export const Home = () => {
  const homeScreenModel = useRef(createHomeScreenModel()).current;

  const fetchCourses = () => {
    homeScreenModel.actions.fetchAllCourses();
  };

  const fetchInstructorTestimonials = () => {
    homeScreenModel.actions.fetchInstructorTestimonials();
  }

  useEffect(() => {
    fetchCourses();
    fetchInstructorTestimonials();
  }, []);

  return (
    <div>
      <HomeNavBar />
      <HeroSection />
      <LSReloadingWrapper
        apiStatusViews$={homeScreenModel.views_courses}
        onReload={fetchCourses}
      >
        <CoursesList coursesList$={homeScreenModel.courses$.data}/>
      </LSReloadingWrapper>
      <LSReloadingWrapper apiStatusViews$={homeScreenModel.views_instructor_testimonials} onReload={fetchInstructorTestimonials}>
        <InStructorTestimonials data$={homeScreenModel.instructorTestimonials$.data} />
      </LSReloadingWrapper>
      <ApplyNow />
      <Presentations /> 
      <FAQs/>
    </div>
  );
};
