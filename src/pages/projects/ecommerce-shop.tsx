import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gallery from "@browniebroke/gatsby-image-gallery";
import Layout from "../../components/Layout";
import reactIcon from "../../assets/images/webdev-icons/react.svg";
import mySqlIcon from "../../assets/images/webdev-icons/mysql.svg";
import dockerIcon from "../../assets/images/webdev-icons/docker.png";
import typescriptIcon from "../../assets/images/webdev-icons/typescript.png";
import bootstrapIcon from "../../assets/images/webdev-icons/bootstrap.png";
import cSharpIcon from "../../assets/images/webdev-icons/c-sharp.png";
import materialUIIcon from "../../assets/images/webdev-icons/material-ui.svg";
import mainGIF from "../../assets/images/gifs/add-to-basket-colours-product.gif";
import { graphql, PageProps } from "gatsby";
import {
  getImage,
  IGatsbyImageData,
  ImageDataLike,
  StaticImage,
} from "gatsby-plugin-image";
import ProjectCard from "../../components/ProjectCard";

type TQueryProps = {
  allFile: {
    edges: {
      node: {
        id: string;
        childImageSharp: {
          thumb: IGatsbyImageData;
          full: IGatsbyImageData;
        };
        name: string;
      };
    }[];
  };
  dsm: ImageDataLike;
  portfolio: ImageDataLike;
};

const EcommerceShopPage = ({ data }: PageProps<TQueryProps>) => {
  const images = data.allFile.edges.map(({ node }) => ({
    ...node.childImageSharp,
    title: node.name,
  }));

  const dsmImage = getImage(data.dsm);
  const portfolioImage = getImage(data.portfolio);

  return (
    <Layout>
      <div className="header-intro theme-bg-primary text-white py-5">
        <div className="container position-relative">
          <h2 className="page-heading mb-2">Ecommerce Shop</h2>
          <div className="page-heading-tagline">Case Study</div>
        </div>
      </div>
      {/* MAIN */}
      <div className="project-wrapper container py-5">
        <div className="row">
          {/* LEFT COLUMN */}
          <section className="col-12 col-lg-8">
            <div className="section-row">
              <div className="mb-5">
                <img
                  src={mainGIF}
                  alt="Ecommerce Shop Screenshot"
                  className="w-100"
                />
              </div>
              <h3 className="section-title">Project Background</h3>

              <p>
                Out of all my finished and many unfinished projects, this was
                easily my favourite one to work on. I knew from the beginning
                that it will present lots of challenges, both on the frontend
                and the backend. Admittedly, I did not help myself by going the
                React route instead of Next.js. I think all E-Commerce sites are
                almost exclusively SSR. But that added difficulty made things
                really interesting and fun.
              </p>
              <p>
                The app is split into 2 parts: a store front, and an admin
                dashboard accessible at the <code>/admin</code> route. CRUD
                actions in the admin dashboard are reflected in the store front.
                The login details for both routes are below:
                <ul>
                  <li>
                    <span className="fw-bold">Store front:</span>
                    <ul>
                      <li>
                        Auth route:{" "}
                        <a href="https://ecommerce-shop.adrianpetrov.com/authenticate">
                          https://ecommerce-shop.adrianpetrov.com/authenticate
                        </a>
                      </li>
                      <li>Email: customer@ecommerce-shop.com</li>
                      <li>Password: customerpassword</li>
                    </ul>
                  </li>
                  <li>
                    <span className="fw-bold">Admin dashboard:</span>
                    <ul>
                      <li>
                        Auth route:{" "}
                        <a href="https://ecommerce-shop.adrianpetrov.com/admin/login">
                          https://ecommerce-shop.adrianpetrov.com/admin/login
                        </a>
                      </li>
                      <li>Email: admin@ecommerce-shop.com</li>
                      <li>Password: adminpassword</li>
                    </ul>
                  </li>
                </ul>
              </p>

              <div className="mb-5">
                <a
                  className="btn btn-primary"
                  href="https://ecommerce-shop.adrianpetrov.com"
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
                      src="../../assets/images/projects/ecommerce-shop-filters.png"
                      alt="Filters Component Screenshot"
                    />
                  </div>
                  <div className="carousel-item">
                    <StaticImage
                      className="d-block w-100"
                      src="../../assets/images/projects/ecommerce-shop-newproductform.png"
                      alt="Create Product Form Screenshot"
                    />
                  </div>
                  <div className="carousel-item">
                    <StaticImage
                      className="d-block w-100"
                      src="../../assets/images/projects/ecommerce-shop-admin-editform.png"
                      alt="Edit Product Form Screenshot"
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
                <li>React + Redux + Bootstrap for the store front.</li>
                <li>React-Admin + Material UI for the admin dashboard.</li>
                <li>
                  Client-side rendering made security tricky, so I implemented
                  HTTP only refresh tokens. This is handled by Axios
                  interceptors on the frontend and middleware on the backend.
                </li>
                <li>
                  Frontend and backend have different auth routes. Customers
                  cannot log into the admin dashboard and viceversa.
                </li>
                <li>
                  Elasticsearch service was added to enable fuzzy searching.
                </li>
                <li>
                  The database, Elasticsearch service, and the app are all
                  isolated in their own container.
                </li>
              </ul>
            </div>

            <div className="section-row theme-bg-secondary">
              <h3 className="section-title">Challenges &amp; Requirements</h3>
              <p>
                From seeding realistic data, to designing the database so that
                all of those lovely filters on the store front work as they
                should, this project has been both challenging and great fun.
              </p>
              <div
                className="bg-secondary"
                style={{
                  borderRadius: "6px",
                  marginBottom: "2rem",
                  padding: "1rem",
                }}
              >
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  fade
                  color="white"
                  className="me-2"
                />
                <span style={{ color: "white" }}>
                  Below, I will be referring to database entities using
                  capitalised, bold text.
                </span>
              </div>
              <p className="mb-4">
                One of the first challenges was creating the inventory with all
                the <strong>Product Variations</strong>. This was a 3 step
                process:
              </p>
              <ol>
                <li>
                  create a CSV file for each base entity, i.e. entities that
                  were used in the seeding process to create other entities
                </li>
                <li>convert the CSV files into JSON files</li>
                <li>
                  and finally import the JSON files into the seeding algorithm.
                  Here, I created variation sets using the{" "}
                  <strong>Product</strong>, <strong>Product Options</strong> and{" "}
                  <strong>Product Option Values</strong>, and for each variation
                  set I created a cartesian product which produced all the
                  permutations for a particular <strong>Product</strong>.
                </li>
              </ol>
              <p>
                I have included some ER diagrams below to visualise things a
                little better:
              </p>
              {/* LIGHTBOX GALLERY */}
              <div className="mb-4">
                <Gallery mdColWidth={33} gutter="2rem" images={images} />
              </div>
              <p>
                Another notable challenge was creating the "Product Variation
                Builder":
              </p>
              <StaticImage
                src="../../assets/images/projects/ecommerce-shop-productvariationbuilder.png"
                alt="Product variation builder"
                width={600}
                className="mb-4"
              />
              <p>
                Conceptually, this one wasn't that difficult, but it had quite a
                few moving parts. Some of them were logically separated
                (products and basket state), which meant that some refactoring
                was in order to create 2-way binding. Then, there was the stock.
                Three entities needed to track their own stock to ensure
                everything was in sync: the <strong>Basket Item</strong>,{" "}
                <strong>Product Variation</strong> and{" "}
                <strong>Product's</strong> individual{" "}
                <strong>Option Values</strong>. We needed that separation so the
                size swatches would show the strikethrough when out of stock
                given the current selected <strong>Option Values</strong>, and
                also whenever we would update the quantity from the basket
                overlay.
              </p>
              <p>
                To make this work, I used the ProductVariationString column of
                the current <strong>Product Variation</strong>, which looked
                something like this:{" "}
                <code>Jupiter_Trousers_Mens_Denim_28_34</code>. All of them
                followed the same naming convention, so all I had to do was run
                a <code>.split("_")</code> on the string and basically update
                the current variation string after each change handler. Then I
                would run a <code>RegEx</code> search on all{" "}
                <strong>Product Variations</strong> related to that{" "}
                <strong>Product</strong> and return the ones which had stock.
                Still not sure if this was the best way of doing it, but it
                works!
              </p>
            </div>
            <div className="section-row">
              <h3 className="section-title">Conclusions</h3>
              <p>
                I can probably think of a few more challenging bits, but these
                are the ones that stood out for me. For the sake of saving time
                and deploying this application as quickly as possible, I did not
                add any unit or integration tests. However, when I finished the
                app, I realised that some sneaky bugs could have been avoided
                had I implemented them. We live and we learn.
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
                      href="https://github.com/adrian-petrov/ecommerce-shop"
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
                      href="https://ecommerce-shop.adrianpetrov.com"
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
                    <strong>Type:</strong> Backend and Frontend
                  </li>
                </ul>
              </div>
              <div className="sidebar-row">
                <h3 className="sidebar-title mb-3">Technologies Used</h3>
                <div className="webdev-icons row mb-5 justify-content-start">
                  <div className="webdev-icon col-3 col-xl-2 me-0 mb-4">
                    <img className="img-fluid" src={cSharpIcon} />
                  </div>
                  <div className="webdev-icon col-3 col-xl-2 me-0 mb-4">
                    <img className="img-fluid" src={mySqlIcon} />
                  </div>
                  <div className="webdev-icon col-3 col-xl-2 me-0 mb-4">
                    <img className="img-fluid" src={typescriptIcon} />
                  </div>
                  <div className="webdev-icon col-3 col-xl-2 me-0 mb-4">
                    <img className="img-fluid" src={reactIcon} />
                  </div>
                  <div className="webdev-icon col-3 col-xl-2 me-0 mb-4">
                    <img className="img-fluid" src={bootstrapIcon} />
                  </div>
                  <div className="webdev-icon col-3 col-xl-2 me-0 mb-4">
                    <img className="img-fluid" src={dockerIcon} />
                  </div>
                  <div className="webdev-icon col-3 col-xl-2 me-0 mb-4">
                    <img className="img-fluid" src={materialUIIcon} />
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
                title="DSM Systems"
                image={dsmImage!}
                tags={[
                  "JavaScript",
                  "React",
                  "Gatsby",
                  "HTML/CSS",
                  ".NET Core",
                ]}
                to="/projects/dsmsystems"
              >
                A simple static website built with Gatsby.js
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

export default EcommerceShopPage;

export const query = graphql`
  query DiagramsAndScreenshots {
    allFile(filter: {relativePath: {regex: "/diagrams/.*\\.png/"}}) {
      edges {
        node {
          id
          childImageSharp {
            thumb: gatsbyImageData(
              width: 300
              height: 300
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
          name
        }
      }
    }
    dsm: file(
      relativePath: { eq: "projects/dsmsystems-home-thumbnail.png" }
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
