import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledPageNotFound = styled.section`
  margin: -8px;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const RouteNotFound = () => {
  return (
    <StyledPageNotFound>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="d-flex flex-column align-items-center text-center">
            <h1
              style={{
                fontSize: "12rem",
                fontFamily: "monospace",
                letterSpacing: "1rem",
              }}
              className="text-danger"
            >
              404
            </h1>
            <h1 className="display-4">Page not found</h1>
            <p className="mb-5">
              We are sorry! The page you requested could not be found.
            </p>
            <Link className="btn btn-primary" to="/">
              Go to homepage
            </Link>
          </div>
        </div>
      </div>
    </StyledPageNotFound>
  );
};

export default RouteNotFound;
