import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container, Red, BoxLink } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import background from '@static/bg.png';
import Masp from '@images/masp.png';

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
    link: 'https://www.youtube.com/c/linuxdevbr',
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

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "header" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Text>
              <BoxLink>
                <ExternalLink href="https://www.eventbrite.com.br/e/linuxdev-br-2020-registration-90329260249?aff=site">
                  <Red>/ / /</Red> Register now
                </ExternalLink>
              </BoxLink>
              <br />
              <p>
                <StyledContainer>
                  <SocialIcons>
                    {SOCIAL.map(({ icon, link }) => (
                      <ExternalLink href={link}>
                        <img src={icon} alt="link" />
                      </ExternalLink>
                    ))}
                  </SocialIcons>
                </StyledContainer>
              </p>
            </Text>
            <MaspImg>
              <img src={Masp} alt="linuxdev-br" />
            </MaspImg>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  background: url(${background}) no-repeat left bottom;
  background-size: cover;
  color: #fff;
  height: 100%;
  overflow: hidden;
  padding-top: 200px;
  padding-bottom: 200px;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  a {
    background-color: rgba(256, 256, 256, 0.2);
    border-radius: 4px;
    margin: 0 5px;
    padding: 5px 2px;
    display: flex;
  }
  z-index: 3;


  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;
  z-index: 2;

  > div {
    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const MaspImg = styled.figure`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 0;
    }
  }
`;

const Text = styled.div`
  vertical-align: top;
  z-index: 2;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
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

export default Header;
