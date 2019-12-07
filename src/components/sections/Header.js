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
              <h1>
                linuxdev-br 2020 in
                <br />
                São Paulo, Brazil
              </h1>
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
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

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

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;
  background-color: rgb(61, 149, 22);
  color: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: rgb(31, 102, 0) 3px 4px;
  position: relative;
  top: 1em;

  &:hover {
    color: ${props => props.theme.color.black.regular};
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
