import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  padding: 0;
`;

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  padding: 50px 0px 10px 0px;
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.shadow};

  div {
    display: flex;
    gap: 20px;
  }

  .btn {
    background: transparent;
    color: ${({ theme }) => theme.colors.textLight};
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavLogo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;
