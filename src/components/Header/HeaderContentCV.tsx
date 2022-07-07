import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";

const HeaderContentCV = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  return (
    <div className="header-intro header-intro-resume theme-bg-primary text-white py-5">
      <div className="container position-relative">
        <h2 className="page-heading mb-3">CV</h2>
        <a
          className="btn theme-btn-on-bg download-resume position-absolute font-weight-bold mx-auto"
          href={data.allFile.edges[0].node.publicURL}
          download
        >
          <FontAwesomeIcon className="me-2" icon={faDownload} />
          Download PDF Version
        </a>
      </div>
    </div>
  );
};

export default HeaderContentCV;
