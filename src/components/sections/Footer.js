import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import GithubIcon from '@static/icons/github.svg';
import YoutubeIcon from '@static/icons/youtube.svg';
import TwitterIcon from '@static/icons/twitter.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import TelegramIcon from '@static/icons/telegram.svg';
import MailIcon from '@static/icons/mail.svg';

const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/linuxdev-br',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/linuxdevbr',
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/linuxdevbr',
  },
  {
    icon: YoutubeIcon,
    link: 'https://www.youtube.com/channel/UCBSpnLjWB7cOsSRz_q2Mr_A',
  },
  {
    icon: TelegramIcon,
    link: 'https://t.me/linuxdevbr',
  },
  {
    icon: MailIcon,
    link: 'mailto:contact@linuxdev-br.net',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "logo_circle" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        {<Art>
          <Img
            fluid={data.art_pot.childImageSharp.fluid}
            style={{ width: 200, maxWidth: '100%', marginBottom: 16 }}
          />
        </Art>}
        <FooterWrapper>
          <StyledContainer>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
