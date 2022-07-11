import React from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bootstrapIcon from "../../assets/images/webdev-icons/bootstrap.png";
import cSharpIcon from "../../assets/images/webdev-icons/c-sharp.png";
import javaScriptIcon from "../../assets/images/webdev-icons/javascript.svg";
import Layout from "../../components/Layout";
import reactIcon from "../../assets/images/webdev-icons/react.svg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { getImage, ImageDataLike, StaticImage } from "gatsby-plugin-image";
import gatsbyIcon from "../../assets/images/webdev-icons/gatsby.svg";
import { graphql, PageProps } from "gatsby";
import ProjectCard from "../../components/ProjectCard";

type TQueryProps = {
  ecommerce: ImageDataLike;
  portfolio: ImageDataLike;
};

const DSMSystemsPage = ({ data }: PageProps<TQueryProps>) => {
  const ecommerceImage = getImage(data.ecommerce);
  const portfolioImage = getImage(data.portfolio);

  return (
    <Layout>
      <div className="header-intro theme-bg-primary text-white py-5">
        <div className="container position-relative">
          <h2 className="page-heading mb-2">DSM Systems</h2>
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
                  src="../../assets/images/projects/dsmsystems-home-thumbnail.png"
                  alt="Ecommerce Shop Screenshot"
                />
              </div>
              <h3 className="section-title">Project Background</h3>
              <p>
                It's probably worth prefacing this by saying that design is not
                my strong suite. Nonetheless, I put my designer hat on for this
                simple website and gave it a shot.
              </p>

              <div className="mb-5">
                <a
                  className="btn btn-primary"
                  href="https://dsmsystems.co.uk"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    style={{ marginRight: "8px" }}
                  />
                  View Live Site
                </a>
              </div>

              <div
                id="project-carousel"
                className="theme-carousel carousel slide mb-5"
                data-bs-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-bs-target="#project-carousel"
                    data-bs-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-bs-target="#project-carousel"
                    data-bs-slide-to="1"
                    className=""
                  ></li>
                  <li
                    data-bs-target="#project-carousel"
                    data-bs-slide-to="2"
                    className=""
                    aria-current="true"
                  ></li>
                </ol>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <StaticImage
                      className="d-block w-100"
                      src={
                        "../../assets/images/projects/dsmsystems-about-1.png"
                      }
                      alt="DSM Systems About Page 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <StaticImage
                      className="d-block w-100"
                      src={
                        "../../assets/images/projects/dsmsystems-about-2.png"
                      }
                      alt="DSM Systems About Page 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <StaticImage
                      className="d-block w-100"
                      src={
                        "../../assets/images/projects/dsmsystems-contact.png"
                      }
                      alt="DSM Systems Contact Page"
                    />
                  </div>
                </div>

                <a
                  className="carousel-control-prev"
                  href="#project-carousel"
                  role="button"
                  data-bs-slide="prev"
                >
                  <svg
                    width="40px"
                    height="40px"
                    viewBox="0 0 150 258"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="arrow-left" fill="#FFFFFF" fillRule="nonzero">
                        <path
                          d="M4.1,120.5 L121.9,4.5 C126.6,-0.2 134.2,-0.2 138.9,4.5 L146,11.6 C150.7,16.3 150.7,23.9 146,28.6 L43.7,129 L145.9,229.4 C150.6,234.1 150.6,241.7 145.9,246.4 L138.8,253.5 C134.1,258.2 126.5,258.2 121.8,253.5 L4,137.5 C-0.6,132.8 -0.6,125.2 4.1,120.5 Z"
                          id="Shape"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#project-carousel"
                  role="button"
                  data-bs-slide="next"
                >
                  <svg
                    width="40px"
                    height="40px"
                    viewBox="0 0 150 258"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="arrow-right" fill="#FFFFFF" fillRule="nonzero">
                        <path
                          d="M145.9,137.5 L28.1,253.5 C23.4,258.2 15.8,258.2 11.1,253.5 L4,246.4 C-0.7,241.7 -0.7,234.1 4,229.4 L106.3,129 L4.1,28.6 C-0.6,23.9 -0.6,16.3 4.1,11.6 L11.2,4.5 C15.9,-0.2 23.5,-0.2 28.2,4.5 L146,120.5 C150.6,125.2 150.6,132.8 145.9,137.5 Z"
                          id="Shape"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>

            {/* MAIN FEATURES */}
            <div className="section-row">
              <h3 className="section-title">Main Features</h3>
              <ul>
                <li>Gatsby + Bootstrap</li>
                <li>Custom design</li>
              </ul>
            </div>

            <div className="section-row theme-bg-secondary">
              <h3 className="section-title">Challenges &amp; Requirements</h3>
              <p>
                Spending far too long in AdobeXD trying to come up with the
                perfect colours, icons, patterns...{" "}
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
                      href="https://github.com/adrian-petrov/dsmsystems"
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
                  <li className="mb-4">
                    <a
                      className="mx-2"
                      target="_"
                      href="https://dsmsystems.co.uk"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        transform="grow-8"
                        style={{
                          marginLeft: "-7px",
                          marginRight: "10px",
                        }}
                      />
                      View Live Site
                    </a>
                  </li>
                  <li>
                    <strong>Type:</strong> Frontend and Backend just for the
                    contact form
                  </li>
                </ul>
              </div>
              <div className="sidebar-row">
                <h3 className="sidebar-title mb-3">Technologies Used</h3>
                <div className="webdev-icons row mb-5 justify-content-start">
                  <div className="webdev-icon col-3 col-xl-2 me-0 mb-4">
                    <img className="img-fluid" src={javaScriptIcon} />
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
                    <img className="img-fluid" src={cSharpIcon} />
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
                title="Portfolio Site"
                image={portfolioImage!}
                tags={["TypeScript", "React", "Gatsby", "GraphQL", "HTML/CSS"]}
                to="/projects/portfolio"
              >
                This portfolio website
              </ProjectCard>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DSMSystemsPage;

export const query = graphql`
  query OtherProjects {
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
    portfolio: file(
      relativePath: { eq: "projects/portfolio-home-thumbnail.png" }
    ) {
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
