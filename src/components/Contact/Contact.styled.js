import styled from "styled-components";

export const ContactWrapper = styled.section`
  padding: 4rem 0rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;

  h2 {
    font-size: 2rem;
    font-family: ${({ theme }) => theme.fonts.header};
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.textHeader};
  }
`;

export const ContactCard = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.shadow};
  background: ${({ theme }) => theme.colors.textLight};
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.3s ease;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
