import React from "react";
import "./AboutUs.css";
import aboutImage from "../assets/Nadia_Art_Paper.png";
import aboutWave from "../assets/wave-spacer.svg";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-text">
          <h1 className="about-us-header">pleased to meet you</h1>
          <div className="about-us-description">
            <p>
              Hi I'm Nadia Park, the owner of nadia coffee, I'm a passionate
              coffee professional and would love to share my knowledge and help
              others to grow not just in the industry, but also just life in
              general. My journey into coffee started as a hobby, which quickly
              grew into a deep passion. I believe in the importance of
              community, education, and continuous learning. Nadia Coffee shop
              embodies these values, offering a space where coffee lovers can
              not only enjoy expertly crafted beverages but also learn more
              about the art and science of coffee, maybe in the process you can
              also learn more about yourself?
            </p>
          </div>
        </div>
        <div className="about-us-img-container">
          <img src={aboutImage} alt="Nadia Park" className="about-us-img" />
        </div>
      </div>
      <img src={aboutWave} alt="wave" className="about-us-wave-svg" />
      <div className="about-us-video-container">
        <h2 className="about-us-video-h2">learn more about me</h2>
        <div className="about-us-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rNs4gCQei3Y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
