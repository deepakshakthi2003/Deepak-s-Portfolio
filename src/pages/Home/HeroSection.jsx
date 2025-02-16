import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Kandha from '../../assets/Deepak.jpg';
import resume from '../../assets/Deepak.V.pdf';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png'

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      // Customize AOS initialization options here if needed
    });
  }, []);
  const openResume = () => {
    window.open(resume, "_blank");
  };

  const scrollToContact = () => {
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="heroSection" className="hero--section">
      <div
        className="hero--section--content--box"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Deepak</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front End</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Creating Engaging User Experiences with React, HTML,
            CSS, and JavaScript. Dive into my portfolio to explore my latest
            projects and
            <br /> see how I bring creativity and functionality together!
          </p>
        </div>
        <div className="btn-container">
          <button className="btn btn-primary" onClick={openResume}>
            Download CV
          </button>
          <button className="btn btn-primary" onClick={scrollToContact}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/v-deepak-7483672a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
            />
          </a>

          <a
            href="https://github.com/deepakshakthi2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="My GitHub profile"
              className="icon"
            />
          </a>
        </div>
      </div>
      <div
        className="hero--section--img"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <img src={Kandha} alt="Hero Section" />
      </div>
    </section>
  );
}
