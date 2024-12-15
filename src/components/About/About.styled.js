import styled from "styled-components";


export const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 3rem;
    text-decoration: underline;
  }
`;


export const Card = styled.div`
  max-width: 850px;
  border-radius: 10px;
  box-shadow: 0 2px 6px ${(props) => props.theme.colors.shadow};
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: auto;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;
