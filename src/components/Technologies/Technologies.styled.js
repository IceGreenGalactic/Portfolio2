import styled from "styled-components";

export const TechnologiesSection = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 50px;
  color: ${(props) => props.theme.colors.text};
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 3rem;
    text-decoration: underline;
  }
  .dots-container {
    display: flex;
    gap: 4px;
    margin-top: 8px;
  }

  .dot {
    width: 6px;
    height: 6px;
    background-color: ${(props) => props.theme.colors.textLight};
    border-radius: 40%;
    display: inline-block;
  }
`;

export const TechnologiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-bottom: 50px;
`;

export const TechnologyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.color || "#ccc"};
  color: ${(props) => props.theme.colors.textLight};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 4px 10px ${(props) => props.shadow};
  text-align: center;
  svg {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;
