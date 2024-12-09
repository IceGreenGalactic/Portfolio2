import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import {
  FooterStyled,
  FooterText,
  SocialLinks,
  SocialLink,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterText>
        &copy; 2024 Kristine Tyrholm. All rights reserved.
      </FooterText>
      <SocialLinks>
        <SocialLink
          href="https://github.com/IceGreenGalactic"  
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />  
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/kristine-tyrholm-7902172a4"  
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />  
        </SocialLink>
      </SocialLinks>
    </FooterStyled>
  );
};

export default Footer;
