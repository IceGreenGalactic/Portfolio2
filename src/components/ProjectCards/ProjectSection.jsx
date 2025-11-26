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
  MoreToggle,
  HighlightsList,
  HighlightItem,
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
import DartPcImage from "../../assets/images/dartGamesPc.png";
import DartPhoneImage from "../../assets/images/dartGamesPhone.png";
import SoveTidPhoneImage from "../../assets/images/soveTidPhone.png";
import SoveTidPcImage from "../../assets/images/soveTidPc.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    id: "personal-1",
    title: "Kennel Shirkus",
    highlights: [
      "Production kennel website built with React (Vite) + Sanity CMS",
      "Structured models for dogs, litters, galleries and site content",
      "Auto-generated navigation and detail pages from CMS data",
      "Responsive layout with lightbox galleries, breadcrumbs and basic SEO",
    ],
    description: `Kennel Shirkus is the first production deployment of a reusable kennel platform I designed and built with React (Vite) and Sanity as a headless CMS. Breeders manage dogs, litters, galleries, and site information directly in Sanity, and the frontend dynamically generates navigation and detail pages from that structured content — new litters automatically appear in the menu, and dogs and litters are linked and easy to browse.

The platform includes a responsive layout, image lightbox galleries, breadcrumbs, and basic SEO handling. Since everything is CMS-driven, the client can update the site independently.

On top of the core platform I implemented a simple theming system where admins can define seasonal or branded colour schemes and header images in Sanity and activate one with a single toggle.`,
    liveLink: "https://shirkus.no/",
    githubLink: "https://github.com/IceGreenGalactic/shirkus-website.git",
    pcImage: ShirkusPcImage,
    phoneImage: ShirkusPhoneImage,
    technologies: ["react", "sanity", "styled", "bootstrap", "netlify"],
  },
  {
    id: "personal-2",
    title: "Kennel Shebonemo",
    highlights: [
      "Second production site built on the same kennel platform",
      "Reuses React + Sanity setup with customised content and branding",
      "Theme configuration managed in Sanity (colors, header imagery)",
      "Shows how the platform can be reused to onboard new kennels quickly",
    ],
    description: `Kennel Shebonemo is a second production site built on top of the same kennel platform as Kennel Shirkus. I reused the core React (Vite) + Sanity architecture, including the content models for dogs, litters, galleries, and pages, and then customised the branding, structure, and copy for this specific kennel.

The site uses the same theme configuration document in Sanity, so the client can manage colours and header imagery without touching code, while the frontend reads the active theme via a shared getTheme helper.

This project shows how the original custom build can function as a small product: once the platform was in place, onboarding a new client was mainly a matter of content entry and visual tweaks rather than starting from scratch.

`,
    liveLink: "https://shebonemo.no/",
    githubLink: "https://github.com/Kennel-Editor/Kennel-Shebonemo.git",
    pcImage: ShebonemoPcImage,
    phoneImage: ShebonemoPhoneImage,
    technologies: ["react", "sanity", "styled", "bootstrap", "netlify"],
  },
  {
    id: "personal-3",
    title: "ZizuenesSamling",
    highlights: [
      "PWA to help kindergartens plan daily circle time (“samling”)",
      "Auto-generates samling based on age, theme, and duration",
      "Manual mode using a library of songs, stories, and prompts",
      "Built with React (Vite) + Sanity, still under active development",
    ],
    description: `ZizuenesSamling is a PWA for kindergartens that helps staff plan daily circle time (“samling”). Built with React (Vite) and Sanity CMS, it can auto-generate a samling based on age group, theme, and duration, so staff can quickly get a complete plan that fits the children in front of them.

The app also supports a manual mode where users can build their own samling by picking from a growing library of songs, stories, conversation prompts, and activities.

It is still under active development, with planned features like links to the Norwegian kindergarten framework, seasonal themes, printable plans, and staff login for saving and sharing samlinger across a team.`,
    liveLink: "https://zizuenes-samling.netlify.app/",
    githubLink: null,
    requestAccess: true,
    pcImage: ZizuPcImage,
    phoneImage: ZizuPhoneImage,
    technologies: ["react", "sanity", "styled", "netlify"],
  },
  {
    id: "personal-4",
    title: "Dart Games",
    highlights: [
      "Mobile-first PWA for tracking darts scores with friends",
      "Multiple game modes with custom scoring logic and stats",
      "State managed with Zustand + React (Vite)",
      "Responsive, themeable UI using styled-components",
    ],
    description: `Dart Games is a personal, mobile-first PWA I designed and built for tracking scores while playing darts with friends. It supports multiple game modes (501/301, Cricket, Killer, Around the Clock) with different rules and win conditions.

Each mode has its own scoring logic, handling of turns, and win or placement detection, as well as per-game stats.

Under the hood it is implemented with React + Vite and Zustand for state management, with a responsive, themeable UI built using styled-components.`,
    liveLink: "https://dart-games.netlify.app/",
    githubLink: "https://github.com/IceGreenGalactic/dart.git",
    pcImage: DartPcImage,
    phoneImage: DartPhoneImage,
    technologies: ["react", "styled", "pwa", "netlify"],
  },
  {
    id: "personal-5",
    title: "Sovetid",
    highlights: [
      "Offline-first PWA used daily in a real kindergarten",
      "Tracks naps, wake-up time, and live countdowns per child",
      "On-screen reminders and alarm when it's time to wake a child",
      "All data stored locally in the browser (no backend)",
    ],
    description: `Sovetid is a privacy-friendly PWA I built for daily use in my kindergarten. Staff can add children, set a maximum sleep duration, and either start a nap live or back-date it if they forgot to start on time.

The app calculates the wake-up time automatically and shows live countdowns for each child, so it's easy to see who should be woken up next.

When a timer finishes, the app shows a clear on-screen reminder and plays a built-in alarm sound (while the app is open), which works well in a busy everyday setting without needing any external notification service.

It runs fully offline and stores all data in the browser's localStorage (no backend), making it simple, safe, and compliant for childcare use.`,
    liveLink: "https://sovetid.netlify.app/",
    githubLink: "https://github.com/IceGreenGalactic/SleepCountdown.git",
    pcImage: SoveTidPcImage,
    phoneImage: SoveTidPhoneImage,
    technologies: ["pwa", "html", "css", "js", "netlify"],
  },

  {
    id: "school-1",
    title: "Holidaze",
    highlights: [
      "Accommodation booking platform from a Noroff project",
      "Venue search, filters, and detailed listing pages",
      "Admin tools for creating and managing venues",
      "API-driven data and fully responsive layout",
    ],
    description: `Holidaze is a responsive accommodation booking platform created as part of a Noroff assignment. Users can browse and search for venues, view detailed listing pages, and explore options using filters.

I also implemented admin tools for creating and managing venues, all backed by an API for dynamic data.

My focus areas in this project were UX, responsive layout, and handling different user flows, such as guests browsing and booking versus admins managing content.`,
    liveLink: "https://holidazehouses.netlify.app/",
    githubLink: "https://github.com/IceGreenGalactic/ProjectExam2-Holidayz.git",
    pcImage: HolidazePcImage,
    phoneImage: HolidazePhoneImage,
    technologies: ["react", "styled", "bootstrap", "netlify"],
  },
  {
    id: "school-2",
    title: "Eccoh",
    highlights: [
      "E-commerce app built with React + Redux",
      "Product listing, search, and cart management",
      "Consuming external API for products",
      "Focused on structured state management and clean flows",
    ],
    description: `Eccoh is an e-commerce web app built with React and Redux for a Noroff course assignment. It includes product listing pages, search, product detail views, and a shopping cart flow.

I set up state handling with Redux to keep the data flow predictable and easy to reason about, especially around cart updates and filtering.

The app consumes an external API for product data, and the goal of the project was to practise structured state management and create a clean, understandable shopping experience.`,
    liveLink: "https://eccho.netlify.app/",
    githubLink: "https://github.com/IceGreenGalactic/webshop-react-CA.git",
    pcImage: EccohPcImage,
    phoneImage: EccohPhoneImage,
    technologies: ["react", "redux", "styled", "bootstrap", "netlify"],
  },
  {
    id: "school-3",
    title: "AuctionHouse",
    highlights: [
      "Auction platform from a Noroff semester project",
      "Users can list items, bid, and manage profiles",
      "Built with HTML, Sass, and vanilla JavaScript",
      "Focus on working with a public API and form handling",
    ],
    description: `AuctionHouse is an auction platform developed for a Noroff semester project. Users can register, create listings, place bids, and manage their profile and active auctions.

The frontend is built with HTML, Sass, and vanilla JavaScript, consuming a public API for data.

This project focused on working with a slightly larger codebase without a framework, handling forms and validation, and structuring the code in a way that stays maintainable as features grow.`,
    liveLink: "https://auction-houze.netlify.app/",
    githubLink: "https://github.com/IceGreenGalactic/semesterProject2.git",
    pcImage: AuctionHousePcImage,
    phoneImage: AuctionHousePhoneImage,
    technologies: ["html", "sass", "js", "bootstrap", "netlify"],
  },
];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card>
      <ImageContainer className="text-center">
        <PcImage src={project.pcImage} alt={`${project.title} on desktop`} />
        <PhoneImage
          className="img img-fluid col-2"
          src={project.phoneImage}
          alt={`${project.title} on mobile`}
        />
      </ImageContainer>

      <ProjectTitle>{project.title}</ProjectTitle>

      {project.highlights && project.highlights.length > 0 && (
        <HighlightsList>
          {project.highlights.map((item, index) => (
            <HighlightItem key={index}>{item}</HighlightItem>
          ))}
        </HighlightsList>
      )}

      {project.description && (
        <>
          {expanded && (
            <div>
              {project.description
                .trim()
                .split("\n\n")
                .map((paragraph, i) => (
                  <ProjectDescription key={i}>{paragraph}</ProjectDescription>
                ))}
            </div>
          )}

          <MoreToggle
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "More details"}
          </MoreToggle>
        </>
      )}

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
  );
};

const ProjectSection = () => {
  const personalProjects = projects.filter((p) => p.id.startsWith("personal"));
  const schoolProjects = projects.filter((p) => p.id.startsWith("school"));

  const ProjectGrid = ({ items }) => (
    <Grid className="m-auto">
      {items.map((project) => (
        <ProjectCard key={project.id} project={project} />
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
