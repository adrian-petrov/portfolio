import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const HeaderContentIndex = () => {
  return (
    <div className="header-intro theme-bg-primary text-white py-5">
      <div className="container">
        <div className="profile-teaser row gx-lg-5 justify-content-center">
          <div className="col-12 col-md-auto text-center text-md-start">
            <StaticImage
              className="profile-image mb-3 mb-lg-0 ms-md-0 rounded mx-auto"
              src="../../assets/images/profile-3.jpg"
              placeholder="blurred"
              width={260}
              height={260}
              quality={80}
              alt="Adrian Petrov - Headshot"
            />
          </div>
          <div className="col text-center text-md-start">
            <div className="lead">Hello there! My name is</div>
            <h2 className="mt-0 display-4 font-weight-bold">Adrian Petrov</h2>
            <div className="bio mb-3">
              I am a Full Stack Developer specialised in C# and React
              development. Check out my{" "}
              <Link className="link-on-bg text-link" to="/projects">
                projects
              </Link>{" "}
              and
              <Link className="link-on-bg text-link" to="/cv">
                {" "}
                CV
              </Link>
              .
            </div>
            <Link
              className="theme-btn-on-bg btn font-weight-bold theme-btn-cta"
              to="/contact"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContentIndex;
