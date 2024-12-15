import styled from "styled-components";
import { slideInFromLeft, slideInFromRight } from "../animations";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 50vh;
  text-align: center;
  background: ${({ theme }) => theme.colors.gradient};
  width: 100%;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.textHeader};
  margin-bottom: 20px;
  font-family: "Arial", sans-serif;
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

export const ProfileImageWrapper = styled.div`
  flex: 1;
  text-align: center;
  animation: ${slideInFromLeft} 1s ease forwards;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px ${({ theme }) => theme.colors.shadow};
    border: 3px solid #fff;
`;


export const HeroText = styled.div`
  flex: 2;
  text-align: left;
  padding: 20px;
  color: ${({ theme }) => theme.colors.textHeader};
  animation: ${slideInFromRight} 1s ease forwards;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }
`;
