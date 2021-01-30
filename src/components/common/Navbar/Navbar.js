import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import { Link } from 'gatsby';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';
import Logo from '@images/art/logo.png';

const NAV = [
  {
    name: 'About',
    anchor: '#about',
  },
  {
    name: 'FAQ',
    anchor: '#faq',
  },
  {
    name: 'News',
    anchor: 'news',
  },
  {
    name: 'Mission',
    anchor: 'mission',
  },
  {
    name: '2019',
    anchor: '2019',
  },
];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV.map(({ name }) => name.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV.map(({ name, anchor }) => (
          <NavItem key={name}>
            <Link to={anchor} onClick={this.closeMobileMenu}>
              {name}
            </Link>
          </NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Brand>
            <Link to="/">
              <img src={Logo} alt="linuxdev-br" />
            </Link>
          </Brand>
          <Mobile>
            <button onClick={this.toggleMobileMenu}  style={{ color: 'black' }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

export default Navbar;
