import React from "react";
import {
  Section,
  Card,
  Grid,
  ImageContainer,
  PcImage,
  PhoneImage,
  ProjectTitle,
  ProjectDescription,
  Buttons,
  Title,
} from "./ProjectSection.styled";
import TechIcons from "./TechIcons";
import HolidazePcImage from "../../assets/images/HolidazePc.png";
import HolidazePhoneImage from "../../assets/images/HolidazePhone.png";
import EccohPcImage from "../../assets/images/EccohPc.png";
import EccohPhoneImage from "../../assets/images/EccohPhone.png";
import AuctionHousePcImage from "../../assets/images/AuctionHousePc.png";
import AuctionHousePhoneImage from "../../assets/images/AuctionHousePhone.png";
import ShirkusPcImage from "../../assets/images/KennelShirkusPc.png";
import ShirkusPhoneImage from "../../assets/images/KennelShirkusPhone.png";
import ShebonemoPcImage from "../../assets/images/ShebonemoPc.png";
import ShebonemoPhoneImage from "../../assets/images/ShebonemoPhone.png";
import ZizuPcImage from "../../assets/images/ZizuPc.png";
import ZizuPhoneImage from "../../assets/images/ZizuPhone.png";
import DartPcImage from "../../assets/images/DartPc.png";
import DartPhoneImage from "../../assets/images/DartPhone.png";
import SoveTidPhoneImage from "../../assets/images/soveTidPhone.png";
import SoveTidPcImage from "../../assets/images/soveTidPc.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectSection = () => {
  const projects = [
    {
      id: "personal-1",
      title: "Kennel Shirkus",
      description:
        "A production website for a Norwegian kennel built with React (Vite) and Sanity as a headless CMS. Breeders manage dogs, litters, galleries, and site info in Sanity; the frontend fetches content and auto-generates pages and navigation — new litters appear in the header automatically, and dogs/litters are linked and sortable. Includes responsive layout, lightbox gallery, breadcrumbs, and basic SEO.",
      liveLink: "https://shirkus.no/",
      githubLink: "https://github.com/IceGreenGalactic/shirkus-website.git",
      pcImage: ShirkusPcImage,
      phoneImage: ShirkusPhoneImage,
      technologies: ["react", "sanity", "styled", "bootstrap"],
    },
    {
      id: "personal-2",
      title: "Kennel Shebonemo",
      description:
        "A production website for a Norwegian kennel built with React (Vite) and Sanity as a headless CMS. Breeders manage dogs, litters, galleries, and site info in Sanity; the frontend fetches content and auto-generates pages and navigation — new litters appear in the header automatically, and dogs/litters are linked and sortable. Includes responsive layout, lightbox gallery, breadcrumbs, and basic SEO.",
      liveLink: "https://shebonemo.no/",
      githubLink: "https://github.com/Kennel-Editor/Kennel-Shebonemo.git",
      pcImage: ShebonemoPcImage,
      phoneImage: ShebonemoPhoneImage,
      technologies: ["react", "sanity", "styled", "bootstrap"],
    },
    {
      id: "personal-3",
      title: "ZizuenesSamling",
      description:
        "An early-stage PWA for kindergartens to simplify daily circle time (“samling”). Built with React (Vite) and Sanity CMS, it lets staff generate or build circle time plans with songs, stories, activities, and conversation prompts. Still under development, with planned links to the Norwegian kindergarten framework, seasonal themes, printable plans, and future login/payment integration.",
      liveLink: "https://zizuenes-samling.netlify.app/",
      githubLink: null,
      requestAccess: true,
      pcImage: ZizuPcImage,
      phoneImage: ZizuPhoneImage,
      technologies: ["react", "sanity", "styled"],
    },
    {
      id: "personal-4",
      title: "Dart Games",
      description:
        "A hobby project developed right after my studies, built as a digital scoreboard for dart games. It currently supports two modes: Killer and Around the Clock. While the design is simple, it highlights my ability to translate real-world needs into functional web applications using HTML, CSS, and vanilla JavaScript.",
      liveLink: "https://dart-games.netlify.app/",
      githubLink: "https://github.com/IceGreenGalactic/dart.git",
      pcImage: DartPcImage,
      phoneImage: DartPhoneImage,
      technologies: ["html", "css", "js"],
    },
    {
      id: "personal-5",
      title: "Sovetid",
      description:
        "A privacy-friendly PWA built for daily use in my kindergarten. Staff can add children, assign max sleep duration, and start naps instantly or back-date them if they forgot to start on time. The app calculates wake-up time automatically, shows live countdowns, and fires a local notification + alarm when time is up. Runs fully offline and stores everything only in localStorage (no backend) which makes it safe and compliant for childcare use.",
      liveLink: "https://sovetid.netlify.app/",
      githubLink: "https://github.com/IceGreenGalactic/SleepCountdown.git",
      pcImage: SoveTidPcImage,
      phoneImage: SoveTidPhoneImage,
      technologies: ["pwa", "html", "css", "js"],
    },
    {
      id: "school-1",
      title: "Holidaze",
      description:
        "A responsive platform for booking accommodations, created as part of a Noroff assignment. Features include venue search, detailed info pages, admin tools for managing listings, and API integration for dynamic data.",
      liveLink: "https://holidazehouses.netlify.app/",
      githubLink:
        "https://github.com/IceGreenGalactic/ProjectExam2-Holidayz.git",
      pcImage: HolidazePcImage,
      phoneImage: HolidazePhoneImage,
      technologies: ["react", "styled", "bootstrap"],
    },
    {
      id: "school-2",
      title: "Eccoh",
      description:
        "An e-commerce web app built with React and Redux, created as part of a Noroff assignment. Offers cart management, search, and API-driven product listings.",
      liveLink: "https://eccho.netlify.app/",
      githubLink: "https://github.com/IceGreenGalactic/webshop-react-CA.git",
      pcImage: EccohPcImage,
      phoneImage: EccohPhoneImage,
      technologies: ["react", "redux", "styled", "bootstrap"],
    },
    {
      id: "school-3",
      title: "AuctionHouse",
      description:
        "An auction platform developed as part of a Noroff assignment. Users can list items, place bids, and manage profiles, with responsive design and real-time updates.",
      liveLink: "https://auction-houze.netlify.app/",
      githubLink: "https://github.com/IceGreenGalactic/semesterProject2.git",
      pcImage: AuctionHousePcImage,
      phoneImage: AuctionHousePhoneImage,
      technologies: ["html", "sass", "js", "bootstrap"],
    },
  ];

  const personalProjects = projects.filter((p) => p.id.startsWith("personal"));
  const schoolProjects = projects.filter((p) => p.id.startsWith("school"));

  const ProjectGrid = ({ items }) => (
    <Grid className="m-auto">
      {items.map((project) => (
        <Card key={project.id}>
          <ImageContainer className="text-center">
            <PcImage
              src={project.pcImage}
              alt={`${project.title} on desktop`}
            />
            <PhoneImage
              className="img img-fluid col-2"
              src={project.phoneImage}
              alt={`${project.title} on mobile`}
            />
          </ImageContainer>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <TechIcons technologies={project.technologies} />
          <Buttons>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="live"
                aria-label={`${project.title} live site`}
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Site
              </a>
            )}

            {project.requestAccess ? (
              <a
                href="mailto:kristine.tyrholm@gmail.com?subject=Request access to ZizuenesSamling code"
                className="github"
                aria-label="Request access to private repository"
              >
                <FontAwesomeIcon icon={faGithub} /> Request Access
              </a>
            ) : (
              project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              )
            )}
          </Buttons>
        </Card>
      ))}
    </Grid>
  );

  return (
    <Section id="projects">
      {personalProjects.length > 0 && (
        <>
          <Title className="text-center">Personal Projects</Title>
          <ProjectGrid items={personalProjects} />
        </>
      )}
      {schoolProjects.length > 0 && (
        <>
          <Title className="text-center mt-5">School Projects</Title>
          <ProjectGrid items={schoolProjects} />
        </>
      )}
    </Section>
  );
};

export default ProjectSection;
