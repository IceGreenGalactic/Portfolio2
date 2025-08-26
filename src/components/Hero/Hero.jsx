import React from "react";
import {
  HeroSection,
  Name,
  HeroContent,
  ProfileImageWrapper,
  ProfileImage,
  HeroText,
} from "./Hero.styled";
import profileImage from "../../assets/images/portfolioImg.jpg";

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent className="d-block d-sm-flex p-4">
        <ProfileImageWrapper>
          <ProfileImage src={profileImage} alt="Profile" />
        </ProfileImageWrapper>
        <HeroText className="text-center text-sm-start">
          <Name>Kristine Tyrholm</Name>
          <h4>From kindergarten teacher to aspiring front-end developer.</h4>
          <p>
            With years of experience leading and inspiring young minds, I bring
            strong communication, creativity, and problem-solving skills into
            tech. I’m passionate about building intuitive, accessible, and
            engaging web applications that make a real difference for users.
          </p>
        </HeroText>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
