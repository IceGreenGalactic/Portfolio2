import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { SiSanity, SiStyledcomponents, SiSass, SiRedux } from "react-icons/si";
import { TechIconsStyled } from "./ProjectSection.styled";

const techMeta = {
  react: { icon: faReact, type: "fa", color: "#61dafb" },
  js: { icon: faJs, type: "fa", color: "#f0db4f" },
  html: { icon: faHtml5, type: "fa", color: "#f06529" },
  css: { icon: faCss3, type: "fa", color: "#2965f1" },
  bootstrap: { icon: faBootstrap, type: "fa", color: "#563d7c" },
  sanity: { icon: SiSanity, type: "react", color: "#f03e2f" },
  styled: { icon: SiStyledcomponents, type: "react", color: "#db7093" },
  sass: { icon: SiSass, type: "react", color: "#cc6699" },
  redux: { icon: SiRedux, type: "react", color: "#764abc" },
};

const TechIcons = ({ technologies = [] }) => {
  return (
    <TechIconsStyled>
      {technologies.map((tech) => {
        const meta = techMeta[tech];
        if (!meta) return null;

        const isStyled = tech === "styled";

        return meta.type === "fa" ? (
          <FontAwesomeIcon
            key={tech}
            icon={meta.icon}
            title={tech.toUpperCase()}
            className={isStyled ? "styled-icon" : ""}
            style={{ color: meta.color }}
          />
        ) : (
          <meta.icon
            key={tech}
            title={tech.toUpperCase()}
            className={isStyled ? "styled-icon" : ""}
            style={{ color: meta.color }}
          />
        );
      })}
    </TechIconsStyled>
  );
};

export default TechIcons;
