import React from "react";
import { CoursesList } from "./components/CoursesList";
import { ApplyNow } from "./ApplyNow";
import { InStructorTestimonials } from "./components/InStructorTestimonials";
import { Presentations } from "./components/Presentations";
import { HeroSection } from "./components/HeroSection";
import { HomeNavBar } from "./HomeNavBar";
import { FAQs } from "./components/FAQs";
import { ApplyNowDrawer } from "./ApplyNowDrawer";

export const Home = () => {
  return (
    <div>
      <HomeNavBar />
      <HeroSection />
      <CoursesList />
      <InStructorTestimonials />
      <ApplyNow />
      <Presentations />
      <FAQs />
      <ApplyNowDrawer />
    </div>
  );
};
