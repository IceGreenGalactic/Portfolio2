import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  ContactWrapper,
  ContactCard,
  ContactItem,
  IconLink,
} from "./Contact.styled.js";

const Contact = () => {
  return (
    <ContactWrapper id="contact" >
      <h2>Contact Me</h2>
      <ContactCard className=" col-12 col-sm-10 col-md-8 col-lg-6 m-auto">
        <ContactItem>
          <MdLocationOn size={24} />
          <span>Sandnes, Norway</span>
        </ContactItem>

        <ContactItem>
          <MdEmail size={24} />
          <IconLink href="mailto:kristine.tyrholm@gmail.com">Kristine.tyrholm@gmail.com</IconLink>
        </ContactItem>

        <ContactItem>
          <FaLinkedin size={24} />
          <IconLink
            href="https://www.linkedin.com/in/kristine-tyrholm-7902172a4/"
            target="_blank"
          >
            LinkedIn
          </IconLink>
        </ContactItem>

        <ContactItem>
          <FaGithub size={24} />
          <IconLink href="https://github.com/dittbrukernavn" target="_blank">
            GitHub
          </IconLink>
        </ContactItem>
      </ContactCard>
    </ContactWrapper>
  );
};

export default Contact;
