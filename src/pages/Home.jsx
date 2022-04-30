import React from "react";
import Header from "../components/Header";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section__content">
        <p className="hero-section__content__title">
          Hi, <br />
          This is{" "}
          <span className="hero-section__content__title--name">
            Aniket Kumar
          </span>
        </p>
        <p className="hero-section__content__subtitle">
          I create websites that turn your{" "}
          <span className="clr-primary">business</span> into{" "}
          <span className="clr-primary">success</span>
        </p>
        <div className="hero-section__content__buttons">
          <a
            href="#"
            className="hero-section__content__buttons__btn hero-section__content__buttons__btn--primary"
            rel="noopener noreferrer"
          >
            View my projects <span className="icon">&rarr;</span>
          </a>
          <a
            href="#"
            className="hero-section__content__buttons__btn hero-section__content__buttons__btn--secondary"
            rel="noopener noreferrer"
          >
            Contact me <span className="icon">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="hero-section__img">
        <div className="img-container">
          <img src="./img/me_grayscale.png" alt="" />
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <div className="projects-section__content">
        <h2 className="projects-section__content__title section-title">
          My <span className="clr-primary">Projects</span>
        </h2>
        <p className="projects-section__content__subtitle">
          I have worked on some of the most interesting projects.
        </p>
        <div className="projects-section__content__projects">
          <div className="projects-section__content__projects__project">
            <div className="projects-section__content__projects__project__img">
              <img src="./img/project_1.png" alt="" />
            </div>
            <div className="projects-section__content__projects__project__content">
              <h3 className="projects-section__content__projects__project__content__title">
                Project Title
              </h3>
              <p className="projects-section__content__projects__project__content__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tempor consectetur, nisi nunc
                lobortis nisi, eget egestas nunc nisl eu nisi.
              </p>
              <a
                href="#"
                className="projects-section__content__projects__project__content__link"
                rel="noopener noreferrer"
              >
                View project <span className="icon">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="projects-section__content__projects__project">
            <div className="projects-section__content__projects__project__img">
              <img src="./img/project_2.png" alt="" />
            </div>
            <div className="projects-section__content__projects__project__content">
              <h3 className="projects-section__content__projects__project__content__title">
                Project Title
              </h3>
              <p className="projects-section__content__projects__project__content__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tempor consectetur, nisi nunc
                lobortis nisi, eget egestas nunc nisl eu nisi.
              </p>
              <a
                href="#"
                className="projects-section__content__projects__project__content__link"
                rel="noopener noreferrer"
              >
                View project <span className="icon">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="projects-section__content__projects__project">
            <div className="projects-section__content__projects__project__img">
              <img src="./img/project_3.png" alt="" />
            </div>
            <div className="projects-section__content__projects__project__content">
              <h3 className="projects-section__content__projects__project__content__title">
                Project Title
              </h3>
              <p className="projects-section__content__projects__project__content__desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tempor consectetur, nisi nunc
                lobortis nisi, eget egestas nunc nisl eu nisi.
              </p>
              <a
                href="#"
                className="projects-section__content__projects__project__content__link"
                rel="noopener noreferrer"
              >
                View project <span className="icon">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProjectsSection />
    </>
  );
};

export default Home;
