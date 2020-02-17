import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_plateia: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "plateia" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_talk: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "talk" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_agenda: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "agenda" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>Early bird tickets available!</h2>
              <p>
                Linux Developer Conference Brazil aims to take the Brazilian
                Linux development community to the international level. Whether
                you are just curious and want to understand the Linux ecosystem,
                someone seeking to contribute to FOSS projects, or even a
                seasoned collaborator, this conference is for you.
              </p>
              <p>
                <StyledExternalLink href="https://www.eventbrite.com.br/e/linuxdev-br-2020-registration-90329260249?aff=site">
                  Register Now &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
            </div>
            <Art>
              <Img
                fluid={data.art_plateia.childImageSharp.fluid}
                style={{ borderRadius: '10%' }}
              />
            </Art>
          </Grid>
          <Grid inverse>
          <Art>
              <Img
                fluid={data.art_talk.childImageSharp.fluid}
                style={{ borderRadius: '10%' }}
              />
            </Art>
            <div>
              <h2>Call for Presentations will open soon!</h2>
              <p>
                We invite everyone to submit talks, workshops and lightning talks for a wide range of topics
                related to the core of modern Linux systems: Linux kernel, bootloaders,
                Container & Virtualization, containers and virtualization, display servers
                 and desktop environments, compilers and toolchains, networking and protocols,
                 security and much more.
              </p>
            </div>
          </Grid>
          <VideoGrid>
          <Video src="https://www.youtube.com/embed/SFgMSS7Jis4"
              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
          </Video>
          </VideoGrid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 50px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`;

const Video = styled.iframe`
  width: 100%;
  max-width: 900px;
  min-height: 500px;
  height: 100%;
  margin: 0;
  border-radius: 2px;
  border: 10px solid #fff;
  box-shadow: 2px 2px 4px #aaa;
`;

const StyledExternalLink = styled(ExternalLink)`
  text-decoration: none;
  background-color: ${props => props.theme.color.secondary};
  color: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: rgb(168, 26, 58) 3px 4px;
  position: relative;
  top: 1em;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default About;
