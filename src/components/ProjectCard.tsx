import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  image: IGatsbyImageData;
  tags: string[];
  to: string;
  children: React.ReactNode;
};

const ProjectCardContainer = styled.div`
  min-height: 100%;
`;

const ProjectCard = ({ image, title, tags, to, children }: Props) => {
  return (
    <ProjectCardContainer className="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
      <div className="card-img-container position-relative">
        <GatsbyImage
          className="card-img-top rounded-0"
          image={image}
          alt={title}
        />
        <div className="card-img-overlay overlay-logo text-center">
          <div className="project-logo">
            <h3>{title}</h3>
          </div>
        </div>
        <Link
          className="card-img-overlay overlay-content text-start p-lg-4"
          to={to}
        >
          <h5 className="card-title font-weight-bold">{title}</h5>
          <p className="card-text">{children}</p>
        </Link>
      </div>
      <div className="card-body pb-0">
        <h4 className="card-title text-truncate text-center mb-0">
          <Link className="text-link" to={to}>
            Tech Stack
          </Link>
        </h4>
      </div>

      <div className="card-footer border-0 text-center bg-white pb-4">
        <ul className="list-inline mb-0 mx-auto">
          {tags.map((tag) => (
            <li key={tag} className="list-inline-item">
              <span className="badge bg-secondary badge-pill">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
