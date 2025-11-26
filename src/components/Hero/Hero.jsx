import React from "react";
import {
  HeroSection,
  Name,
  HeroContent,
  ProfileImageWrapper,
  ProfileImage,
  HeroText,
  CTAWrapper,
  PrimaryButton,
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
          <h4>Kindergarten teacher turned front-end developer.</h4>
          <p>
            After many rewarding years in early childhood education, I
            discovered passion for building digital products. I bring strong
            communication skills, problem-solving, and a deep understanding of
            real everyday user needs — especially in kindergartens. I’m now
            excited to grow as a developer and contribute to creating intuitive,
            inclusive web experiences — in EdTech and beyond.
          </p>
          <CTAWrapper className="m-auto m-md-0">
            <PrimaryButton href="#contact">Let’s work together</PrimaryButton>
          </CTAWrapper>
        </HeroText>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
