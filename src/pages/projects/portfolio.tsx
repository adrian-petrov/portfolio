import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getImage, ImageDataLike, StaticImage } from "gatsby-plugin-image";
import bootstrapIcon from "../../assets/images/webdev-icons/bootstrap.png";
import gatsbyIcon from "../../assets/images/webdev-icons/gatsby.svg";
import typescriptIcon from "../../assets/images/webdev-icons/typescript.png";
import reactIcon from "../../assets/images/webdev-icons/react.svg";
import graphqlIcon from "../../assets/images/webdev-icons/graphql.svg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Layout from "../../components/Layout";
import { graphql, PageProps } from "gatsby";
import ProjectCard from "../../components/ProjectCard";

type TQueryProps = {
  ecommerce: ImageDataLike;
  dsm: ImageDataLike;
};

const PortfolioPage = ({ data }: PageProps<TQueryProps>) => {
  const ecommerceImage = getImage(data.ecommerce);
  const dsmImage = getImage(data.dsm);

  return (
    <Layout>
      <div className="header-intro theme-bg-primary text-white py-5">
        <div className="container position-relative">
          <h2 className="page-heading mb-2">Portfolio</h2>
          <div className="page-heading-tagline">Case Study</div>
        </div>
      </div>
      <div className="project-wrapper container py-5">
        <div className="row">
          {/* LEFT COLUMN */}
          <section className="col-12 col-lg-8">
            <div className="section-row">
              <div className="mb-5">
                <StaticImage
                  src="../../assets/images/projects/portfolio-home-thumbnail.png"
                  alt="Ecommerce Shop Screenshot"
                />
              </div>
              <h3 className="section-title">Project Background</h3>
              <p>[Insert Inception joke here...]</p>
            </div>

            {/* MAIN FEATURES */}
            <div className="section-row">
              <h3 className="section-title">Main Features</h3>
              <ul>
                <li>Gatsby + Bootstrap</li>
              </ul>
            </div>

            <div className="section-row theme-bg-secondary">
              <h3 className="section-title">Challenges &amp; Requirements</h3>
              <p>
                None. Just another reminder of how robust the tooling is for
                Gatsby and how enjoyable the dev experience is.
              </p>
            </div>
          </section>
          {/* RIGHT ASIDE */}
          <aside className="project-sidebar col-12 col-lg-4 ps-lg-5">
            <div className="project-sidebar-inner bg-white p-4">
              <div className="sidebar-row mb-5">
                <h3 className="sidebar-title mb-4">Project Info</h3>
                <ul className="list-unstyled ps-2">
                  <li className="mb-4">
                    <a
                      href="https://github.com/adrian-petrov/portfolio"
                      target="_"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        transform="grow-8"
                        style={{
                          marginRight: "10px",
                        }}
                      />
                      View on Github
                    </a>
                  </li>
                  <li>
                    <strong>Type:</strong> Frontend
                  </li>
                </ul>
              </div>
              <div className="sidebar-row">
                <h3 className="sidebar-title mb-3">Technologies Used</h3>
                <div className="webdev-icons row mb-5 justify-content-start">
                  <div className="webdev-icon col-3 col-xl-2 me-0 mb-4">
                    <img className="img-fluid" src={typescriptIcon} />
                  </div>
                  <div className="webdev-icon col-3 col-xl-2 me-0 mb-4">
                    <img className="img-fluid" src={reactIcon} />
                  </div>
                  <div className="webdev-icon col-3 col-xl-2 me-0 mb-4">
                    <img className="img-fluid" src={gatsbyIcon} />
                  </div>
                  <div className="webdev-icon col-3 col-xl-2 me-0 mb-4">
                    <img className="img-fluid" src={bootstrapIcon} />
                  </div>
                  <div className="webdev-icon col-3 col-xl-2 me-0 mb-4">
                    <img className="img-fluid" src={graphqlIcon} />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      {/* OTHER PROJECTS */}
      <section className="section py-5 related-projects-section bg-white">
        <div className="container">
          <h3 className="section-title font-weight-bold text-center mb-4">
            Other Projects
          </h3>
          <div className="project-cards row justify-content-center">
            <div className="col-12 col-lg-4">
              <ProjectCard
                title="Ecommerce Shop"
                image={ecommerceImage!}
                tags={[
                  ".NET Core",
                  "MySQL/EF Core",
                  "Docker",
                  "TypeScript",
                  "React",
                  "Redux",
                ]}
                to="/projects/ecommerce-shop"
              >
                An Ecommerce website, split into 2 apps: a store front where
                users can browse the products, create accounts, place orders,
                etc., and a CRUD admin backend with a separate login and
                authentication.
              </ProjectCard>
            </div>
            <div className="col-12 col-lg-4">
              <ProjectCard
                title="DSM Systems"
                image={dsmImage!}
                tags={["JavaScript", "React", "Gatsby", "HTML/CSS"]}
                to="/projects/dsmsystems"
              >
                A simple static website built with Gatsby.js
              </ProjectCard>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;

export const query = graphql`
  query {
    ecommerce: file(
      relativePath: { eq: "projects/ecommerce-shop-home-thumbnail.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 300
          height: 220
          transformOptions: { fit: CONTAIN }
        )
      }
    }
    dsm: file(relativePath: { eq: "projects/dsmsystems-home-thumbnail.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 300
          height: 220
          transformOptions: { fit: CONTAIN }
        )
      }
    }
  }
`;
