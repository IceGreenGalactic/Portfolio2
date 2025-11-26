import styled from "styled-components";

export const ContactWrapper = styled.section`
  padding: 4rem 1.5rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    font-size: 2rem;
    font-family: ${({ theme }) => theme.fonts.header};
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.textHeader};
    text-decoration: underline;
  }

  .contact-intro {
    margin: 0 auto 0.5rem auto;
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.7;
  }
`;

export const ContactCard = styled.div`
  max-width: 520px;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  background: transparent;
  box-shadow: none;
`;

export const ContactItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialButtonRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 0.5rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.7rem 0.9rem;
  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  box-shadow: 0 1px 4px ${({ theme }) => theme.colors.shadow};

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 1px 1px ${({ theme }) => theme.colors.shadow};
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  &:hover svg {
    color: #fff;
  }
`;
