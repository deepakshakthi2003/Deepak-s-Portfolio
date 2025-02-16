import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import img1 from '../../assets/Deepakblack.jpg';
import experience from '../../assets/experience.png';
import  education from '../../assets/education.png';


export default function AboutMe() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <section id="AboutMe" className="about--section">
      <div
        className="about--section--img"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img src={img1} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Get To Know More</p>
          <h1 className="skills-section--heading">About Me</h1>
          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img
                  src={experience}
                  alt="Experience icon"
                  class="icon"
                />
                <h3>Experience</h3>
                <p>
                  1+ years <br />
                  Frontend Development
                </p>
              </div>
              <div class="details-container">
                <img
                  src={education}
                  alt="Education icon"
                  class="icon"
                />
                <h3>Education</h3>
                <p>
                  B.E. Bachelors Degree
                  <br />
                  Computer-Science
                </p>
              </div>
            </div>
            <div class="text-container">
              <p>
                Hello, I'm Deepak, A highly motivated React and Next.js developer with experience in building scalable and responsive web
                applications. Proficient in TypeScript, Firebase, NextAuth.js, Stripe integration, and Material UI, with a strong
                focus on user authentication, API integration, and performance optimization. Passionate about crafting
                seamless user experiences and solving complex problems. Adept at working with modern front-end
                technologies and continuously learning to stay ahead in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
