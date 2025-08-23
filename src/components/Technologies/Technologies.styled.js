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
    margin-top: 6px;
    justify-content: center;
    
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 40%;
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.textLight};
    box-shadow: 0 1px 3px ${({ theme }) => theme.colors.shadow};
  }

  .dot.empty {
    opacity: 0.35;
    box-shadow: 0 1px 3px ${({ theme }) => theme.colors.shadow};
  }
`;

export const TechnologiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 22px;
  padding-bottom: 50px;
`;

export const TechnologyItem = styled.div`
  background: ${(props) => props.color || "#6e7a7cff"};
  color: ${({ theme }) => theme.colors.textLight};
  width: 110px;
  height: 110px;
  border-radius: 50%;
  box-shadow: 0 1px 10px ${({ theme }) => theme.colors.shadow};
  
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1.8rem;
    margin-bottom: 6px;
    text-shadow: 0 1px 3px ${({ theme }) => theme.colors.shadow};
  }

  span {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 0.85rem;
    font-weight: 600;
    line-height: 1.1;
    text-shadow: 0 1px 3px ${({ theme }) => theme.colors.shadow};
  }
`;
