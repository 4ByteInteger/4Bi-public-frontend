import React from "react";
import "../styles/hero.scss";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/slice";

export const HeroSection = () => {
  const dispatch = useDispatch();

  const openApplyModal = () => {
    dispatch(openModal());
  };

  return (
    <div className="hero-section-container">
      <div className="left">
        <h1>
          We're here to help you land your{" "}
          <p className="blue-text">Dream Tech Job</p>
        </h1>
        <p>
          Unlock your potential with top-tier coding courses designed by
          industry experts. Achieve your dreams with our comprehensive,
          high-standard curriculum
        </p>
        <p style={{ color: "white" }}>Trusted By</p>
        <button onClick={openApplyModal} className="apply-btn">
          Apply Now
        </button>
      </div>
      <div className="right">
        <iframe
          src="https://www.youtube.com/embed/JvKqk8QtURA?si=JvClGAjGcU7onW5a"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};
