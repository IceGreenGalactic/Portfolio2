import React, { useState } from "react";
import { HeaderContainer, NavContainer, NavItem, ModeButtonContainer } from "./Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const PortfolioHeader = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  const handleNavClick = (id) => {
    setActiveNav(id); 
  };

  return (
    <HeaderContainer>
      <NavContainer className="navbar navbar-expand-md navbar-light w-100">
        <div className="container col-10 col-lg-8 m-auto">
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

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="justify-content-evenly w-100 d-block d-md-flex align-items-center">
              <NavItem
                href="#home"
                className={`d-block d-md-flex mt-2 mt-md-0 ${
                  activeNav === "#home" ? "active" : ""
                }`}
                onClick={() => handleNavClick("#home")}
              >
                Home
              </NavItem>
              <NavItem
                href="#projects"
                className={`d-block d-md-flex mt-2 mt-md-0 ${
                  activeNav === "#projects" ? "active" : ""
                }`}
                onClick={() => handleNavClick("#projects")}
              >
                Projects
              </NavItem>
              <NavItem
                href="#technologies"
                className={`d-block d-md-flex mt-2 mt-md-0 ${
                  activeNav === "#technologies" ? "active" : ""
                }`}
                onClick={() => handleNavClick("#technologies")}
              >
                Technologies
              </NavItem>
              <NavItem
                href="#about"
                className={`d-block d-md-flex mt-2 mt-md-0 ${
                  activeNav === "#about" ? "active" : ""
                }`}
                onClick={() => handleNavClick("#about")}
              >
                About
              </NavItem>
              <ModeButtonContainer
                onClick={handleToggleTheme}
                className="mt-2 mt-md-0"
              >
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />{" "}
                Mode
              </ModeButtonContainer>
            </div>
          </div>
        </div>
      </NavContainer>
    </HeaderContainer>
  );
};

export default PortfolioHeader;
