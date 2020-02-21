import styled from 'styled-components';

import { Container } from '@components/global';

export const Nav = styled.nav`
  padding: 0;
  margin-bottom: -105px;
  width: 100%;
  top: 0;
  position: relative;
  background-color: rgba(256, 256, 256, 0.3);
  z-index: 3;

`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin-bottom: 0.5em;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;

        > ${NavItem} {
          margin: 0;
          margin-bottom: 0.5em;
        }
      `};
  }
`;

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.primary};
  ${props => props.theme.font_size.small};

  a {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
  }

  &.active {
    a {
      opacity: 1;
    }
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
  text-align: right;
`;

export const Brand = styled.div`
  font-family: ${props => props.theme.font.primary};
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`;
