import React from "react";
import {
  TechnologiesGrid,
  TechnologyItem,
  TechnologiesSection,
} from "./Technologies.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faBootstrap,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { SiSanity, SiStyledcomponents } from "react-icons/si";

const TOTAL_DOTS = 7;

const TechIcon = ({ icon, label }) => {
  if (typeof icon === "function") {
    const IconComp = icon;
    return <IconComp title={label} />;
  }
  return <FontAwesomeIcon icon={icon} title={label} />;
};

const generateDots = (level) =>
  Array.from({ length: TOTAL_DOTS }, (_, i) => {
    const filled = i < level;
    return <span key={i} className={`dot ${filled ? "filled" : "empty"}`} />;
  });

const Technologies = () => {
  const technologies = [
    { icon: faHtml5, name: "HTML", color: "#f06529", level: 4 },
    { icon: faCss3Alt, name: "CSS", color: "#2965f1", level: 4 },
    { icon: faJsSquare, name: "JavaScript", color: "#f0db4f", level: 3 },
    { icon: faReact, name: "React", color: "#61dafb", level: 3 },
    {
      icon: SiStyledcomponents,
      name: "Styled Components",
      color: "#db7093",
      level: 4,
    },
    { icon: faBootstrap, name: "Bootstrap", color: "#563d7c", level: 4 },
    { icon: faSass, name: "Sass", color: "#cc6699", level: 2 },
    { icon: SiSanity, name: "Sanity", color: "#f03e2f", level: 3 },
  ];

  return (
    <TechnologiesSection id="technologies">
      <div className="container">
        <h2 className="text-center">Technologies</h2>
        <p className="text-center mb-4">
          These are the technologies I use today and where I’m currently
          focusing my learning.
        </p>
        <TechnologiesGrid>
          {technologies.map((t, idx) => (
            <TechnologyItem key={idx} color={t.color} title={t.name}>
              <TechIcon icon={t.icon} label={t.name} />
              <span>{t.name}</span>
              <div className="dots-container">{generateDots(t.level)}</div>
            </TechnologyItem>
          ))}
        </TechnologiesGrid>
      </div>
    </TechnologiesSection>
  );
};

export default Technologies;
