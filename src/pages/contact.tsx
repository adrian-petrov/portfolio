import React from "react";
import Layout from "../components/Layout";
import headshot from "../assets/images/profile-3.jpg";
import {
  faGithubAlt,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderContentContact from "../components/Header/HeaderContentContact";

const ContactPage = () => {
  return (
    <Layout>
      <HeaderContentContact />
      <section className="section py-5">
        <div className="container">
          <div className="row">
            <div className="contact-intro col-lg-8 mx-lg-auto mb-5 text-center">
              <img
                className="profile-small d-inline-block mx-auto rounded-circle mb-2"
                src={headshot}
                alt="Adrian Petrov - Headshot"
              />

              <div className="speech-bubble bg-white p-4 p-lg-5 shadow-sm">
                <h3 className="font-weight-bold text-center mb-3">
                  I am currently available for developer jobs!
                  <i className="fa-solid fa-laptop-code"></i>
                </h3>
                I am open to working with a variety of tech stacks! Please get
                in touch if you'd like to learn more about me and what I can
                bring to a team.
                <p className="d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-envelope"></i>
                  <a className="mx-1" href="mailto:adrian@adrianpetrov.com">
                    adrian@adrianpetrov.com
                  </a>
                </p>
                <h6 className="font-weight-bold text-center mb-3">
                  You can also find me on the following channels
                </h6>
                <ul className="social-list-color list-inline mb-0">
                  <li className="list-inline-item mb-3">
                    <a
                      className="github"
                      target="_"
                      href="https://github.com/adrian-petrov"
                    >
                      <FontAwesomeIcon icon={faGithubAlt} />
                    </a>
                  </li>
                  <li className="list-inline-item mb-3">
                    <a
                      className="stack-overflow"
                      target="_"
                      href="https://stackoverflow.com/users/11217072/adrian-petrov"
                    >
                      <FontAwesomeIcon icon={faStackOverflow} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
