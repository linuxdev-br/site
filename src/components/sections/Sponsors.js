import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container, Red, SectionTitle } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const LOGOS = [
  {
    level: 'diamond',
    sponsors: [],
  },
  {
    level: 'platinum',
    sponsors: [],
  },
  {
    level: 'gold',
    sponsors: [],
  },
  {
    level: 'silver',
    sponsors: [
      {
        image: 'foundriesio.png',
        link: 'https://foundries.io/',
      },
      {
        image: 'linux-foundation.png',
        link: 'https://www.linuxfoundation.org/',
      },
      {
        image: 'profusion.png',
        link: 'https://profusion.mobi/',
      },
    ],
  },
  {
    level: 'bronze',
    sponsors: [],
  },
  {
    level: 'happyhour',
    sponsors: [
      {
        image: 'google.png',
        link: 'https://google.com',
      },
    ],
  },
  {
    level: 'partners',
    sponsors: [
      {
        image: 'ictl.jpg',
        link: 'https://www.ictl.org.br/',
      },
      {
        image: 'flusp.png',
        link: 'https://flusp.ime.usp.br/',
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
          <h1><SectionTitle><Red>/ / / </Red>Sponsors</SectionTitle></h1>
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
          <br />
          <p>
            <h2>Want to sponsor?</h2>
            <br />
            Check our{' '}
            <ExternalLink href="https://github.com/linuxdev-br/conference-doc/raw/master/linuxdev-br2020_sponsorship-prospectus.pdf">
              sponsorship prospectus
            </ExternalLink>{' '}
            or talk to us at{' '}
            <ExternalLink href="mailto:board@linuxdev-br.net">
              board@linuxdev-br.net
            </ExternalLink>
            .
          </p>
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
  margin-bottom: 96px;
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
    ${props =>
      props.level &&
      `grid-template-columns: ${
        props.level === 'diamond'
          ? '1fr'
          : props.level === 'platinum'
          ? '1fr'
          : props.level === 'gold'
          ? '1fr'
          : props.level === 'happyhour'
          ? '1fr'
          : '1fr 1fr'
      }`};
  }

  ${props =>
    props.level &&
    `grid-template-columns: ${
      props.level === 'diamond'
        ? '1fr'
        : props.level === 'platinum'
        ? '1fr 1fr'
        : props.level === 'gold'
        ? '1fr 1fr'
        : props.level === 'happyhour'
        ? '1fr 1fr 1fr'
        : '1fr 1fr 1fr 1fr'
    }`};
`;

const StyledContainer = styled(Container)`
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const SponsorsTitle = styled.h2`
  text-transform: uppercase;
  background-color: ${props => props.theme.color.secondary};
  text-align: center;
  color: #fff;
  margin-bottom: 2em;
  padding: 0.2em;
  font-family: sans-serif;
  font-size: 1.5em;
`;

export default UsedBy;
