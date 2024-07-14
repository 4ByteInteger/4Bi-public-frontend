import React, { useEffect } from "react";
import "./styles/home-navbar.scss";
import InnerLogo from "../../images/inner_logo.svg";
import { useDispatch } from "react-redux";
import { openModal } from "./redux/slice";
import { navigationHighlighter } from "../../utils/navigationHighlighter";

export const HomeNavBar = () => {
  const dispatch = useDispatch();

  const openApplyNowModal = () => {
    dispatch(openModal());
  };

  useEffect(navigationHighlighter, []);

  return (
    <div className="home-navbar-container fr-aic jc-sb">
      <div className="left">
        <img src={InnerLogo} className="logo" alt="4ByteInteger Logo" />
      </div>
      <div className="right">
        <a href="#courses" className="highlight">
          Courses
        </a>
        <a href="#instructors">Instructors</a>
        <a href="#faqs">FAQ</a>
        <button onClick={openApplyNowModal} className="btn">
          Get Callback
        </button>
      </div>
    </div>
  );
};
