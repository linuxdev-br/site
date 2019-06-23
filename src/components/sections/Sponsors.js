import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const LOGOS = [
  {
    level: 'platinum',
    sponsors: [
      {
        image: 'collabora.png',
        link: 'https://www.collabora.com',
      },
      {
        image: 'ibm.png',
        link: 'https://www.ibm.com',
      },
    ],
  },
  {
    level: 'silver',
    sponsors: [
      {
        image: 'microchip.png',
        link: 'https://www.artimar.com.br/microchip-technology/',
      },
      {
        image: 'profusion.png',
        link: 'https://profusion.mobi',
      },
      {
        image: 'opensuse.png',
        link: 'https://www.opensuse.org',
      },
      {
        image: 'toradex.png',
        link: 'https://www.toradex.com/',
      },
    ],
  },
  {
    level: 'bronze',
    sponsors: [
      {
        image: 'lpi.png',
        link: 'https://lpi.org',
      },
      {
        image: 'redhat.png',
        link: 'https://redhat.com',
      },
      {
        image: 'vulcanet.png',
        link: 'https://vulcanet.com.br/',
      },
      {
        image: 'fourlinux.png',
        link: 'https://www.4linux.com.br/',
      },
    ],
  },
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "logos" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="sponsors">
        <StyledContainer>
          <h1>Sponsors</h1>
          {LOGOS.map(({ level, sponsors }) => (
            <div key={level}>
              <SponsorsTitle>{level}</SponsorsTitle>
              <LogoGrid level={level}>
                {sponsors.map(({ image, link }) => {
                  const img = data.allFile.edges.find(
                    ({ node }) => node.relativePath === image
                  ).node;

                  return (
                    <ExternalLink key={link} href={link}>
                      <Img fluid={img.childImageSharp.fluid} />
                    </ExternalLink>
                  );
                })}
              </LogoGrid>
            </div>
          ))}
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;
  width: 100%;
  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;

    img {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }

  ${props =>
    props.level &&
    `grid-template-columns: ${
      props.level === 'platinum' ? '1fr 1fr' : '1fr 1fr 1fr 1fr'
    }`};
`;

const StyledContainer = styled(Container)`
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const SponsorsTitle = styled.h2`
  text-transform: uppercase;
  background-color: #f8a12e;
  text-align: center;
  color: #fff;
  margin-top: 4em;
  padding: 0.2em;
  font-family: sans-serif;
  font-size: 1.2em;
`;

export default UsedBy;
