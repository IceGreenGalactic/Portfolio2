import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import {
  SiSanity,
  SiStyledcomponents,
  SiSass,
  SiRedux,
  SiNetlify,
} from "react-icons/si";
import { TechIconsStyled } from "./ProjectSection.styled";

const PwaIcon = () => (
  <svg
    viewBox="0 -159.5 512 512"
    width="1em"
    height="1em"
    style={{ fill: "#5A0FC8" }}
  >
    <g>
      <polygon
        fill="#3D3D3D"
        points="376.818362 158.243566 391.609181 120.840549 434.316067 120.840549 414.048526 64.1021885 439.396722 3.2018623e-05 512.000001 192.769205 458.457706 192.769205 446.051149 158.243566"
      ></polygon>
      <polygon
        fill="#5A0FC8"
        points="331.139673 192.76973 408.862952 0.000304174426 357.335083 0.000560323934 304.16787 124.572484 266.360657 0.00081647082 226.753837 0.00081647082 186.158952 124.572484 157.530493 67.8076311 131.622821 147.624549 157.926821 192.76973 208.636591 192.76973 245.320394 81.0556311 280.296394 192.76973"
      ></polygon>
      <path
        d="M48.9117387,126.594779 L80.6502305,126.594779 C90.2643944,126.594779 98.8254436,125.52173 106.333378,123.375631 L114.541378,98.0882869 L137.481444,27.4139262 C135.733509,24.6434344 133.737968,22.0239459 131.494821,19.5558016 C119.71646,6.51845082 102.483673,0 79.7959354,0 L0,0 L0,192.769205 L48.9117387,192.769205 L48.9117387,126.594779 Z M90.9224928,44.3484836 C95.5231485,48.9787787 97.8232141,55.1749754 97.8232141,62.9375984 C97.8232141,70.7597623 95.8001321,76.9635656 91.7542305,81.5490082 C87.3188207,86.6440902 79.1517387,89.1915 67.2535092,89.1915 L48.9117387,89.1915 L48.9117387,37.4026475 L67.3883289,37.4026475 C78.477378,37.4026475 86.3220994,39.7179262 90.9224928,44.3484836 Z"
        fill="#3D3D3D"
      ></path>
    </g>
  </svg>
);

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
  pwa: { icon: PwaIcon, type: "react" },
  netlify: { icon: SiNetlify, type: "react", color: "#00AD9F" },
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
