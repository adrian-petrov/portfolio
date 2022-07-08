import { graphql, useStaticQuery } from "gatsby";
import { getImage, ImageDataLike } from "gatsby-plugin-image";
import React from "react";
import HeaderContentProjects from "../../components/Header/HeaderContentProjects";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";

type TQueryProps = {
  ecommerce: ImageDataLike;
  dsm: ImageDataLike;
  portfolio: ImageDataLike;
};

const Projects = () => {
  const data = useStaticQuery<TQueryProps>(graphql`
    query ProjectsQuery {
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
  `);

  const ecommerceImage = getImage(data.ecommerce);
  const dsmImage = getImage(data.dsm);
  const portfolioImage = getImage(data.portfolio);

  return (
    <Layout>
      <HeaderContentProjects />
      <section className="section pt-5">
        <div className="container">
          <div className="project-cards row mb-5">
            <div className="col-12 col-lg-4">
              <ProjectCard
                title="Ecommerce Shop"
                image={ecommerceImage!}
                tags={["TypeScript", "React", "Redux", ".NET Core", "MySQL"]}
                to="ecommerce-shop"
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
                tags={[
                  "JavaScript",
                  "React",
                  "Gatsby",
                  "HTML/CSS",
                  ".NET Core",
                ]}
                to="dsmsystems"
              >
                A simple static website built with Gatsby.js
              </ProjectCard>
            </div>
            <div className="col-12 col-lg-4">
              <ProjectCard
                title="Portfolio Site"
                image={portfolioImage!}
                tags={["TypeScript", "React", "Gatsby", "GraphQL", "HTML/CSS"]}
                to="portfolio"
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

export default Projects;
