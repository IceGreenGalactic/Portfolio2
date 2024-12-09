import React from "react";
import {
  Section,
  Card,
  ImageContainer,
  PcImage,
  PhoneImage,
  ProjectTitle,
  ProjectDescription,
  Buttons,
} from "./ProjectSection.styled";
import HolidazePcImage from "../../assets/images/HolidazePc.png";
import HolidazePhoneImage from "../../assets/images/HolidazePhone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Holidaze",
      description:
        "Holidaze is a modern platform for booking vacation rentals and exploring travel destinations.",
      liveLink: "#",
      githubLink: "#",
      pcImage: HolidazePcImage,
      phoneImage: HolidazePhoneImage,
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "Explore the features of Project Two. It's fast, reliable, and built for performance.",
      liveLink: "#",
      githubLink: "#",
      pcImage: HolidazePcImage,
      phoneImage: HolidazePhoneImage,
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "Dive into Project Three, a modern application with cutting-edge technology.",
      liveLink: "#",
      githubLink: "#",
      pcImage: HolidazePcImage,
      phoneImage: HolidazePhoneImage,
    },
  ];

  return (
    <Section>
      {projects.map((project) => (
        <Card key={project.id}>
          <ImageContainer>
            <PcImage src={project.pcImage} alt={`${project.title} on PC`} />
            <PhoneImage
              src={project.phoneImage}
              alt={`${project.title} on Phone`}
            />
          </ImageContainer>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>

          <Buttons>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="live"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              Live Site
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
          </Buttons>
        </Card>
      ))}
    </Section>
  );
};

export default ProjectSection;
