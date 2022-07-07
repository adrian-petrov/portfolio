import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import headshot from "../assets/images/profile-3.jpg";

const StyledFooter = styled.footer`
  flex-shrink: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <section className="section-cta py-5 bg-primary text-white">
        <div className="container">
          <div className="text-center">
            <img
              className="profile-small d-inline-block mx-auto rounded-circle mb-2"
              src={headshot}
              alt="Adrian Petrov - Headshot"
            />
          </div>
          <h3 className="text-center my-3">
            Looking for a full-stack developer? I am always happy to chat.
          </h3>
          <div className="d-flex justify-content-center">
            <Link
              className="theme-btn-on-bg btn font-weight-bold theme-btn-cta"
              to="/contact"
            >
              Get in touch
            </Link>
          </div>
          <div className="section-intro mx-auto text-center mb-3"></div>
        </div>
      </section>
    </StyledFooter>
  );
};

export default Footer;
