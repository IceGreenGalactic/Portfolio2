import styled from "styled-components";
import { slideInFromLeft } from "../animations";

export const Section = styled.section`
  padding: 3rem 1rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  max-width: 1420px;
  margin-inline: auto;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;
  text-decoration: underline;
`;

export const Grid = styled.div`
  display: grid;
  gap: 24px;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);

    & > *:nth-last-child(1):nth-child(3n + 1) {
      grid-column: 2;
    }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0px 6px ${({ theme }) => theme.colors.shadow};
  animation: ${slideInFromLeft} 0.8s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0px 6px ${({ theme }) => theme.colors.secondary};
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
`;

export const PcImage = styled.img`
  width: 52%;
  height: auto;
  object-fit: contain;
`;

export const PhoneImage = styled.img`
  max-width: 20%;
  height: auto;
  object-fit: contain;
`;

export const ProjectTitle = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  margin: 0.75rem 0 0.25rem 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ProjectDescription = styled.p`
  font-size: 0.95rem;
  text-align: center;
  margin: 0.5rem 0 0.75rem 0;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0.75rem 1.25rem;
    font-weight: bold;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.buttonText};
    transition: all 0.25s ease;
    white-space: nowrap;
    font-size: 0.95rem;

    @media (max-width: 360px) {
      font-size: 0.9rem;
      padding: 0.6rem 0.9rem;
    }

    &:hover {
      opacity: 0.95;
      transform: translateY(-1px);
    }
  }

  .svg-inline--fa {
    margin-right: 6px;
  }

  .live {
    background: linear-gradient(to right, #3ea2ea, #67cbee);
  }

  .github {
    background: linear-gradient(to right, #6e5494, #8f6aa3);
    color: #fff;
  }
`;

export const TechIconsStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 1rem 0;
  align-items: center;

  svg {
    font-size: 1.2rem;
    transition: transform 0.2s ease;
  }

  svg:hover {
    transform: scale(1.2);
  }

  .styled-icon {
    font-size: 1.8rem;
  }
`;
