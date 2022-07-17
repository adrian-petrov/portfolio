import React from "react";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import HeaderContentCV from "../components/Header/HeaderContentCV";

const CVPage = () => {
  return (
    <Layout>
      <HeaderContentCV />
      <article className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
          <header className="resume-header pt-4 pt-md-0">
            <div className="row">
              <div className="col-block col-md-auto resume-picture-holder text-center text-md-start">
                <StaticImage
                  className="profile-image mb-lg-0 ms-md-0 mx-auto"
                  src="../assets/images/profile-3.jpg"
                  placeholder="blurred"
                  width={250}
                  height={250}
                  quality={80}
                  style={{
                    minHeight: "220px",
                    minWidth: "220px",
                  }}
                  alt="Adrian Petrov - Headshot"
                />
              </div>
              <div className="col">
                <div className="row p-4 justify-content-start justify-content-md-between">
                  <div className="primary-info col-auto">
                    <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">
                      Adrian Petrov
                    </h1>
                    <div className="title mb-3">Full Stack Developer</div>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <a
                          className="text-link"
                          href="mailto:adrian@adrianpetrov.com"
                        >
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="me-2"
                            transform="grow-4"
                          />
                          adrian@adrianpetrov.com
                        </a>
                      </li>
                      <li>
                        <a className="text-link" href="tel:+447477139571">
                          <FontAwesomeIcon
                            icon={faMobileAlt}
                            transform="grow-6"
                            style={{ marginLeft: "2px", marginRight: "10px" }}
                          />
                          07477 139 571
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="secondary-info col-auto mt-2">
                    <ul className="resume-social list-unstyled">
                      <li className="mb-2">
                        <a
                          className="text-link"
                          target="_"
                          href="https://github.com/adrian-petrov"
                        >
                          <span className="fa-container text-center me-2">
                            <FontAwesomeIcon icon={faGithubAlt} />
                          </span>
                          github.com/adrian-petrov
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-link"
                          href="https://adrianpetrov.com"
                        >
                          <span className="fa-container text-center me-2">
                            <FontAwesomeIcon icon={faGlobe} />
                          </span>
                          adrianpetrov.com
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-link"
                          href="https://www.linkedin.com/in/adrian-petrov-dev/"
                        >
                          <span className="fa-container text-center me-2">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </span>
                          linkedin.com/in/adrian-petrov-dev
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="resume-body p-5">
            <section className="resume-section summary-section mb-5">
              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                Career Summary
              </h2>
              <div className="resume-section-content">
                <p className="mb-3">
                  Self-taught developer with 4 years of non-commercial
                  programming experience. Passionate about all things software
                  development. Capable of solving complex problems using
                  relevant design patterns and software development principles.
                </p>
                <p className="mb-3">
                  Always aspiring to produce clean, documented, DRY code.
                  Forever a student and highly motivated, I am always tinkering
                  with some new technology in pursuit of expanding my skillset.
                </p>
                <p className="mb-0">
                  I have worked with a variety of technologies, but for the last
                  2 years my focus has been C#/.NET Core, React and Docker.
                </p>
              </div>
            </section>
            <div className="row">
              <div className="col-lg-9">
                <section className="resume-section skills-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Skills &amp; Tools
                  </h2>
                  <div className="resume-section-content d-flex">
                    <div className="resume-skill-item col-lg-4">
                      <h4 className="resume-skills-cat font-weight-bold">
                        Backend
                      </h4>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <div className="resume-skill-name">C#/.NET Core</div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Node.js</div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Python</div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Elasticsearch</div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">
                            PostgreSQL/MySQL
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">
                            Entity Framework Core
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="resume-skill-item col-lg-4">
                      <h4 className="resume-skills-cat font-weight-bold">
                        Frontend
                      </h4>
                      <ul className="list-unstyled mb-4">
                        <li className="mb-2">
                          <div className="resume-skill-name">
                            JavaScript/TypeScript
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">React</div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Redux</div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Angular</div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Webpack</div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">
                            HTML/CSS/SASS/LESS
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="resume-skill-item col-lg-4">
                      <h4 className="resume-skills-cat font-weight-bold">
                        Others
                      </h4>
                      <ul className="list-unstyled mb-4">
                        <li className="mb-2">
                          <div className="resume-skill-name">Git</div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">Docker</div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">AWS</div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">
                            Database Design
                          </div>
                        </li>
                        <li className="mb-2">
                          <div className="resume-skill-name">
                            SOLID Principles
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section className="resume-section experience-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Work Experience
                  </h2>
                  <div className="resume-section-content">
                    <div className="resume-timeline position-relative">
                      <article className="resume-timeline-item position-relative pb-5">
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">
                              IT Tech Support
                            </h3>
                            <div className="resume-company-name ms-auto">
                              DSM Systems
                            </div>
                          </div>
                          <div className="resume-position-time">
                            Aug 2018 - Present
                          </div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>
                            DSM Systems is an IT Support company based in
                            Chippenham, Wiltshire.
                          </p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                            Responsibilities:
                          </h4>
                          <ul>
                            <li>
                              Ensure the smooth running of services on local and
                              cloud servers, backup systems, networking
                              equipment.
                            </li>
                            <li>
                              Ensure systems are patched up quickly after
                              security threats are discovered.
                            </li>
                            <li>
                              Deal with client queries and issues over the phone
                              and using a ticketing system.
                            </li>
                            <li>Write scripts to automate frequent tasks.</li>
                            <li>
                              Manage users, company data, security, using Office
                              365 and Azure.
                            </li>
                            <li>
                              Spin up and configure Lightsail/EC2 instances in
                              AWS as and when required.
                            </li>
                            <li>
                              Configure and maintain workstations (software
                              updates, manage security threats).
                            </li>
                          </ul>
                        </div>
                      </article>
                      <article className="resume-timeline-item position-relative pb-5">
                        <div className="resume-timeline-item-header mb-2">
                          <div className="d-flex flex-column flex-md-row">
                            <h3 className="resume-position-title font-weight-bold mb-1">
                              Business Information Administrator
                            </h3>
                            <div className="resume-company-name ms-auto">
                              Vallis Group
                            </div>
                          </div>
                          <div className="resume-position-time">
                            Jan 2017 - Jul 2018
                          </div>
                        </div>
                        <div className="resume-timeline-item-desc">
                          <p>
                            Vallis Group is a logistics company operating in
                            Africa and the Middle East with the Head Office in
                            Frome, Somerset.
                          </p>
                          <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                            Responsibilites:
                          </h4>
                          <ul>
                            <li>
                              Analysed and collated company data using Excel.
                              Presented the information in formatted pivot
                              tables for senior management and marketing
                              purposes.
                            </li>
                            <li>
                              Organised company information using MS SharePoint.
                            </li>
                            <li>
                              Provided in-house IT Support to colleagues and
                              troubleshooted IT issues before escalating with
                              the relevant service providers.
                            </li>
                            <li>
                              Updated the content on the company's WordPress
                              website.
                            </li>
                            <li>
                              Wrote and maintained the accuracy of company
                              brochures, newsletters and presentations
                            </li>
                          </ul>
                        </div>
                      </article>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-3">
                <section className="resume-section education-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Education
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <div className="resume-degree font-weight-bold">
                          BSc Psychology (2:1)
                        </div>
                        <div className="resume-degree-org">
                          Bangor University
                        </div>
                        <div className="resume-degree-time">2012-2016</div>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="resume-section language-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Languages
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-lang-list">
                      <li className="mb-2">
                        <span className="resume-lang-name font-weight-bold">
                          English
                        </span>
                        <small className="text-muted font-weight-normal">
                          (Bilingual)
                        </small>
                      </li>
                      <li className="mb-2 align-middle">
                        <span className="resume-lang-name font-weight-bold">
                          Romanian
                        </span>
                        <small className="text-muted font-weight-normal">
                          (Bilingual)
                        </small>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="resume-section interests-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Interests
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-1">Strength training</li>
                      <li className="mb-1">Cycling</li>
                      <li className="mb-1">Running</li>
                      <li className="mb-1">Hiking and exploring</li>
                      <li className="mb-1">Socialising</li>
                      <li className="mb-1">Live music</li>
                      <li className="mb-1">Cooking</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default CVPage;
