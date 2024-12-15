import React from "react";
import {
  HeroSection,
  Name,
  HeroContent,
  ProfileImageWrapper,
  ProfileImage,
  HeroText,
} from "./Hero.styled";
import profileImage from "../../assets/images/mini-snow-warrior.jpg";

const Hero = () => {
  return (
    <HeroSection
      className="col-md-10 col-lg-8 m-auto col-11 align-items-center m-auto justify-content-center pt-2 pt-md-0"
      id="home"
    >

      <HeroContent className="d-block d-sm-flex ">
        
        <ProfileImageWrapper>
          <ProfileImage src={profileImage} alt="Profile" />
        </ProfileImageWrapper>
        <HeroText className="text-center text-sm-start">
        <Name>Kristine Tyrholm</Name>
          <h4>
            A kindergarten teacher transitioning into front-end development.
          </h4>
          <p>
            With a passion for creativity and problem-solving, I’m combining my
            skills in communication, patience, and collaboration to create
            user-friendly, impactful web applications.
          </p>
        </HeroText>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
