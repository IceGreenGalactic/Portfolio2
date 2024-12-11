import React, { useState } from "react";
import { HeaderContainer, NavContainer, NavItem } from "./Header.styled";
import Hero from "../components/Hero/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const PortfolioHeader = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme(); 
  };

  return (
    <HeaderContainer>
      <NavContainer className="navbar navbar-expand-md navbar-light w-100">
        <div className="container col-10  col-lg-8 m-auto">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <button onClick={handleToggleTheme} className="btn">
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" /> Mode
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="justify-content-evenly w-100 d-block d-md-flex align-items-center">
              <NavItem className="d-block d-md-flex mt-2 mt-md-0" href="#home">
                Home
              </NavItem>
              <NavItem
                className="d-block d-md-flex mt-2 mt-md-0"
                href="#projects"
              >
                Projects
              </NavItem>
              <NavItem
                className="d-block d-md-flex mt-2 mt-md-0"
                href="#technologies"
              >
                technologies
              </NavItem>
              <NavItem className="d-block d-md-flex mt-2 mt-md-0" href="#about">
                About
              </NavItem>
            </div>
          </div>
        </div>
      </NavContainer>


    </HeaderContainer>
  );
};

export default PortfolioHeader;
