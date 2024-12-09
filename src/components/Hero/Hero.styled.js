import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 50vh;
  text-align: center;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.textLight};
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
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.shadow};
`;

export const HeroText = styled.div`
  flex: 2;
  text-align: left;
  padding: 20px;
  color: ${({ theme }) => theme.colors.textLight};

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }
`;
