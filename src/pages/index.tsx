import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { getImage, ImageDataLike } from "gatsby-plugin-image";
import backendIcon from "../assets/images/backend-icon.svg";
import frontendIcon from "../assets/images/frontend-icon.svg";
import generalIcon from "../assets/images/general.svg";
import otherSkillsIcon from "../assets/images/other-skills-icon.svg";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import HeaderContentIndex from "../components/Header/HeaderContentIndex";

type TQueryProps = {
  ecommerce: ImageDataLike;
  dsm: ImageDataLike;
};

const HomePage = ({ data }: PageProps<TQueryProps>) => {
  const ecommerceImage = getImage(data.ecommerce);
  const dsmImage = getImage(data.dsm);

  return (
    <Layout>
      <HeaderContentIndex />
      <section className="skills-section section py-5">
        <div className="container">
          <h3 className="section-title font-weight-bold text-center mb-3">
            How it all began...
          </h3>
          <div className="section-intro mx-auto text-center mb-5 text-secondary">
            My programming journey began around 4 years ago. I was managing a
            WordPress website and one day, out of curiousity, opened up a random
            PHP file and I just knew there and then that this would be my next
            challenge. The challenge would soon become a hobby, and today it's
            one of my passions. Over the years, I've learnt a great deal about
            writing clean code, design patterns and clean architecture. I've
            worked with a number of technologies including Node.js, PHP, Python,
            React, Angular, among many others. About a year ago, I knew it was
            time to accelerate my transition into the tech world and build
            something more serious. Something that would incorporate everything
            I had learnt up to that pointl. So I put together this{" "}
            <Link className="text-link" to="/projects/ecommerce-shop">
              E-Commerce site.
            </Link>
            .
          </div>
          <h3 className="section-title font-weight-bold text-center mb-3">
            ...and my skills today
          </h3>
          <div className="section-intro mx-auto text-center mb-5 text-secondary">
            Below is a quick overview of my main technical skills and some of
            the tools I have used over the years.
          </div>

          <div className="skills-blocks mx-auto pt-5">
            <div className="row">
              <div className="skills-block col-12 col-lg-3 mb-5 mb-3 mb-lg-0">
                <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                  <h4 className="skills-cat text-center mb-3 mt-5">Backend</h4>
                  <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                    <img className="skills-icon" src={backendIcon} />
                  </div>
                  <ul className="skills-list list-unstyled text-secondary">
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>C#/.NET
                      Core
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>Node.js
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>Python
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>
                      Elasticsearch
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>
                      PostgreSQL/MySQL
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>Entity
                      Framework Core
                    </li>
                  </ul>
                </div>
              </div>

              <div className="skills-block col-12 col-lg-3 mb-5 mb-lg-0">
                <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                  <h4 className="skills-cat text-center mb-3 mt-5">Frontend</h4>
                  <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                    <img className="skills-icon" src={frontendIcon} />
                  </div>
                  <ul className="skills-list list-unstyled text-secondary">
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>
                      JavaScript/TypeScript
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>React
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>Redux
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>Angular
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>Webpack
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>
                      HTML/CSS/SASS/LESS
                    </li>
                  </ul>
                </div>
              </div>

              <div className="skills-block col-12 col-lg-3 ">
                <div
                  className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative"
                  style={{ minHeight: "100%" }}
                >
                  <h4 className="skills-cat text-center mb-3 mt-5">Others</h4>
                  <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                    <img className="skills-icon" src={generalIcon} />
                  </div>
                  <ul className="skills-list list-unstyled text-secondary">
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>Docker
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>AWS
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>
                      PowerShell
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>Database
                      Design
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>SOLID
                      Principles
                    </li>
                  </ul>
                </div>
              </div>

              <div className="skills-block col-12 col-lg-3 ">
                <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative h-100">
                  <h4 className="skills-cat text-center mb-3 mt-5">Tools</h4>
                  <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                    <img className="skills-icon" src={otherSkillsIcon} />
                  </div>
                  <ul className="skills-list list-unstyled text-secondary">
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>Git
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>
                      JetBrains Rider
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>
                      LINQPad
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>VS Code
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check me-2 text-primary"></i>Adobe XD
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-featured-projects py-5 bg-white">
        <div className="container">
          <h3 className="section-title font-weight-bold text-center mb-5">
            Featured Projects
          </h3>

          <div className="project-cards justify-content-center row mb-5">
            <div className="col-12 col-lg-4">
              <ProjectCard
                title="Ecommerce Shop"
                image={ecommerceImage!}
                tags={["TypeScript", "React", "Redux", ".NET Core", "MySQL"]}
                to="projects/ecommerce-shop"
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
                to="projects/dsmsystems"
              >
                A simple static website built with Gatsby.js
              </ProjectCard>
            </div>
          </div>
          <div className="text-center">
            <Link className="btn btn-primary" to="projects">
              View all projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;

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
