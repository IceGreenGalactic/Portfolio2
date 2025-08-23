import styled from "styled-components";
import { slideInFromLeft } from "../animations";

export const Section = styled.section`
  padding: 3rem 1rem;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;
  text-decoration: underline;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 900px;
  padding: 20px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0 0px 6px ${(props) => props.theme.colors.shadow};
  margin: 40px auto;
  animation: ${slideInFromLeft} 0.8s ease-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0px 6px ${(props) => props.theme.colors.secondary};
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const PcImage = styled.img`
  width: 60%;
  height: auto;
  object-fit: contain;
`;

export const PhoneImage = styled.img`
  height: auto;
  object-fit: contain;
`;

export const ProjectTitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  margin: 1rem 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 1rem 0rem 0.5rem 0;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.text};
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0.8rem 1.5rem;
    font-weight: bold;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.buttonText};
    transition: all 0.3s ease;
    white-space: noWrap;

    @media (max-width: 320px) {
      font-size: 14px;
      padding: 0.6rem 0.8rem;
    }
    &:hover {
      opacity: 0.9;
    }
  }

  .svg-inline--fa {
    margin-right: 5px;
  }

  .live {
    background: linear-gradient(to right, #3ea2ea, #67cbee);

    &:hover {
      background: linear-gradient(to right, #1870ae, #2abcf1);
    }
  }

  .github {
    background: linear-gradient(to right, #6e5494, #8f6aa3);
    color: #fff;

    &:hover {
      background: linear-gradient(to right, #4d3c66, #6e4594);
    }
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
