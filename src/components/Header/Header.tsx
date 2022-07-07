import React from "react";
import { Link } from "gatsby";
import HeaderContent from "./HeaderContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faGithubAlt,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const StyledLink = styled(Link)`
  position: relative;

  &.active div {
    @media (min-width: 991px) {
      top: 42px;
      left: 0;
      width: 100%;
      position: absolute;
      height: 3px;
      background-color: #ffff;
      border-radius: 2px;
      transition: all 0.4s ease-in-out;
    }
  }
`;

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar theme-bg-primary-darken">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark position-relative">
            <ul className="social-list list-inline mb-0">
              <li className="list-inline-item">
                <a
                  className="text-white"
                  target="_"
                  href="https://github.com/adrian-petrov"
                >
                  <FontAwesomeIcon icon={faGithubAlt} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="text-white"
                  target="_"
                  href="https://stackoverflow.com/users/11217072/adrian-petrov"
                >
                  <FontAwesomeIcon icon={faStackOverflow} />
                </a>
              </li>
            </ul>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse text-uppercase"
              id="navigation"
            >
              <ul className="navbar-nav ms-lg-auto">
                <li className="nav-item me-lg-3">
                  <StyledLink
                    activeClassName="active"
                    className="nav-link"
                    to="/"
                  >
                    About
                    <div />
                  </StyledLink>
                </li>
                <li className="nav-item me-lg-3">
                  <StyledLink
                    activeClassName="active"
                    partiallyActive
                    className="nav-link"
                    to="/projects"
                  >
                    Projects
                    <div />
                  </StyledLink>
                </li>
                <li className="nav-item me-lg-3">
                  <StyledLink
                    activeClassName="active"
                    className="nav-link"
                    to="/cv"
                  >
                    CV
                    <div />
                  </StyledLink>
                </li>
                <li className="nav-item me-lg-3">
                  <StyledLink
                    activeClassName="active"
                    className="nav-link"
                    to="/contact"
                  >
                    Contact
                    <div />
                  </StyledLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <HeaderContent />
    </header>
  );
};

export default Header;
