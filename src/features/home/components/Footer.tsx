import React from "react";
import "../styles/footer.scss";
import Logo from "../../../images/inner_logo.svg";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div>
          <img src={Logo} alt="4byteinteger logo" />
          <p>
            We're on mission in making the graduates as engineers at top product
            based companies.
          </p>
        </div>
        <div className="item">
          <h2>Courses</h2>
          <NavLink className="link" to="/">
            4byteinteger
          </NavLink>
          <NavLink className="link" to="/">
            MERN Stack
          </NavLink>
          <NavLink className="link" to="/">
            DSA with java
          </NavLink>
          <NavLink className="link" to="/">
            Pricing & Refund Policy
          </NavLink>
        </div>
        <div className="item">
          <h2>Contact Us</h2>
          <div>
            Email us at:
            <p>support@4byteinteger.com</p>
          </div>
          <div>
            4byteinteger pvt ltd, PR Layout Chandra Layout, Marathahalli,
            Bengaluru, Karnataka 560037
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>Copyright 2024 4byteinteger pvt ltd. All rights reserved.</p>
        <p>Powered by NxtGen Rocket</p>
      </div>
    </div>
  );
};
