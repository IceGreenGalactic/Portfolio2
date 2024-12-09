import styled from "styled-components";

// Footer Section styling
export const FooterStyled = styled.footer`
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 40px 20px;
  text-align: center;
  box-shadow: 0 -4px 6px ${({ theme }) => theme.colors.shadow};
`;

// Footer Text styling
export const FooterText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin: 0;
`;

// Social Links styling (if you have social media links)
export const SocialLinks = styled.div`
  margin-top: 20px;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.5rem;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
