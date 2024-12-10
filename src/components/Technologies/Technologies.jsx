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

const generateDots = (level) => {
  return Array.from({ length: level }, (_, index) => (
    <span key={index} className="dot"></span>
  ));
};

const Technologies = () => {
  const technologies = [
    { icon: faHtml5, name: "HTML", color: "#f06529", level: 4 },
    { icon: faCss3Alt, name: "CSS", color: "#2965f1", level: 4 },
    { icon: faJsSquare, name: "JavaScript", color: "#f0db4f", level: 2 },
    { icon: faReact, name: "React", color: "#61dafb", level: 1 },
    { icon: faBootstrap, name: "Bootstrap", color: "#563d7c", level: 3 },
    { icon: faSass, name: "SASS", color: "#cc6699", level: 2 },
  ];

  return (
    <TechnologiesSection id="technologies">
      <div className="container">
        <h2 className="text-center">Technologies</h2>
        <p className="text-center mb-4">
          These are the technologies I am currently using and learning.
        </p>
        <TechnologiesGrid>
          {technologies.map((technology, index) => (
            <TechnologyItem key={index} color={technology.color}>
              <FontAwesomeIcon icon={technology.icon} />
              <span>{technology.name}</span>
              <div className="dots-container">
                {generateDots(technology.level)}
              </div>
            </TechnologyItem>
          ))}
        </TechnologiesGrid>
      </div>
    </TechnologiesSection>
  );
};

export default Technologies;
