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
import EccohPcImage from "../../assets/images/EccohPc.png";
import EccohPhoneImage from "../../assets/images/EccohPhone.png";
import AuctionHousePcImage from "../../assets/images/AuctionHousePc.png";
import AuctionHousePhoneImage from "../../assets/images/AuctionHousePhone.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Holidaze",
      description:
        "A responsive platform for booking accommodations, created as part of a Noroff assignment. Features include venue search, detailed info pages, admin tools for managing listings, and API integration for dynamic data.",
      liveLink: "https://holidazehouses.netlify.app/",
      githubLink:
        "https://github.com/IceGreenGalactic/ProjectExam2-Holidayz.git",
      pcImage: HolidazePcImage,
      phoneImage: HolidazePhoneImage,
    },
    {
      id: 2,
      title: "Eccoh",
      description:
        "An e-commerce webshop built using React and Redux,created as part of a Noroff assignment. Offering cart management, search, and API integration for dynamic product listings.",
      liveLink: "https://eccho.netlify.app/",
      githubLink: "https://github.com/IceGreenGalactic/webshop-react-CA.git",
      pcImage: EccohPcImage,
      phoneImage: EccohPhoneImage,
    },
    {
      id: 3,
      title: "AuctionHouse",
      description:
        "An auction platform developed as part of a Noroff assignment. Users can list items, place bids, and manage profiles, with responsive design and real-time updates.",
      liveLink: "https://auction-houze.netlify.app/",
      githubLink: "https://github.com/IceGreenGalactic/semesterProject2.git",
      pcImage: AuctionHousePcImage,
      phoneImage: AuctionHousePhoneImage,
    },
  ];

  return (
    <Section
      className="d-block d-md-flex flex-wrap justify-content-between"
      id="projects"
    >
      {projects.map((project) => (
        <Card key={project.id} className="col-12 col-md-10 col-lg-5 mb-4">
          <ImageContainer className="text-center">
            <PcImage src={project.pcImage} alt={`${project.title} on PC`} />
            <PhoneImage
              className="img img-fluid col-2"
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
              <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Site
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </Buttons>
        </Card>
      ))}
    </Section>
  );
};

export default ProjectSection;
