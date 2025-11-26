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
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.textHeader};
  margin-bottom: 20px;
  font-family: "Arial", sans-serif;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
`;

export const ProfileImageWrapper = styled.div`
  flex: 1;
  text-align: center;
  animation: ${slideInFromLeft} 1s ease forwards;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px ${({ theme }) => theme.colors.shadow};
  border: 3px solid #fff;
  object-position: 60% 0%;
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
export const CTAWrapper = styled.div`
  margin-top: 10px;
  flex-wrap: wrap;
}
`;

export const PrimaryButton = styled.a`
  border-radius: 30px;
  background: transparent;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s ease;
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;
