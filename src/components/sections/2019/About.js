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
        art_masp: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "masp" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_agenda: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "talk" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
              <h2>The Conference</h2>
              <p>
                Linux Developer Conference Brazil aims to take the Brazilian
                Linux development community to the international level. Whether
                you are just curious and want to understand the Linux ecosystem,
                someone seeking to contribute to FOSS projects, or even a
                seasoned collaborator, this conference is for you.
              </p>
            </div>
            <Art>
              <Img
                fluid={data.art_masp.childImageSharp.fluid}
                style={{ borderRadius: '10%' }}
              />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
                <Img
                  fluid={data.art_agenda.childImageSharp.fluid}
                  style={{ borderRadius: '10%' }}
                />
            </Art>
            <div>
              <h2>Schedule</h2>
              <p>
                The conference will start with one day of workshops (limited
                spots – more info soon) at{' '}
                <ExternalLink href="https://goo.gl/maps/yMqMQWPb758cG6Jw5">
                  University of São Paulo(USP)
                </ExternalLink>{' '}
                on August 2 and then followed by two days of presentations and
                discussions at{' '}
                <ExternalLink href="https://goo.gl/maps/umaECCj55JUo3bxh8">
                  Radisson Paulista Plaza
                </ExternalLink>{' '}
                on August 3-4. Watch the {' '}
                <ExternalLink href="https://www.youtube.com/playlist?list=PLswkdXczmU4CtNV5oSeXCjZ-U7lB2yYlE">
                  talks
                </ExternalLink>
                .
              </p>
            </div>
          </Grid>
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
  margin: 24px 0;

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

export default About;
