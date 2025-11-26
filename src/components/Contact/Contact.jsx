import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  ContactWrapper,
  ContactCard,
  ContactItem,
  SocialButtonRow,
  SocialButton,
} from "./Contact.styled.js";

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <h2>Let’s Connect</h2>
      <p className="contact-intro">
        I’d love to connect — whether you’re hiring, have a question, or just
        want to say hi.
      </p>

      <ContactCard>
        <SocialButtonRow>
          <SocialButton href="mailto:kristine.tyrholm@gmail.com">
            <MdEmail size={20} />
            <span>Email me</span>
          </SocialButton>

          <SocialButton
            href="https://www.linkedin.com/in/kristine-tyrholm-7902172a4/"
            target="_blank"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </SocialButton>

          <SocialButton
            href="https://github.com/IceGreenGalactic"
            target="_blank"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </SocialButton>
        </SocialButtonRow>
      </ContactCard>
    </ContactWrapper>
  );
};

export default Contact;
