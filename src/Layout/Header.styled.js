import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  flex-direction: column;

  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
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

  .navbar-toggler {
    background: transparent;
    color: ${({ theme }) => theme.colors.textHeader};
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }

    .navbar-toggler-icon {
      font-size: 1.4rem;
    }
  }
`;

export const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.header};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textLight};
    text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
      max-width:fit-content ;

  }
`;

export const ModeButtonContainer = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  padding: 5px 0px;
  font-size: 0.875rem;
  border-radius: 5px;
  cursor: pointer;
  filter: brightness(0.85);

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.textHeader};
    filter: brightness(0.85);
  }
`;

export const NavLogo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;
