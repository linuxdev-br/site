import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container, SectionTitle, Red } from '@components/global';


const CoC = () => (
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
        <Section id="coc" accent="secondary">
            <Container>
                <h1><SectionTitle><Red>/ / / </Red>Code of Conduct</SectionTitle></h1>
                 <p>The conference has a <a href="./code-of-conduct"> Code of 
                    Conduct</a> and all participants are required to conform to the Code of Conduct. Any kind of harrasment
                or unacceptable behavior is unwelcome at this event.  </p> 
            </Container>
        </Section>
    )}
  />
);

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

export default CoC;
