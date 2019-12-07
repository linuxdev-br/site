import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Where = () => (
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
        <Section id="where" accent="secondary">
            <Container>
                <h1>Where</h1>
                <br />
                 <Grid>
                    <Art>
                        <p>August 2 at CCSL/University of São Paulo</p>
                        <br />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.269529770778!2d-46.73362434899728!3d-23.558761384608957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce561437311a2b%3A0x281256ef0da42272!2sCCSL+-+Centro+de+Compet%C3%AAncia+em+Software+Livre+da+Universidade+de+S%C3%A3o+Paulo!5e0!3m2!1sen!2sbr!4v1561326718902!5m2!1sen!2sbr" width="400" height="300" allowfullscreen></iframe>
                    </Art>
                    <Art>
                        <p>August 3-4 at Radisson Paulista Plaza</p>
                        <br />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9110459369185!2d-46.648547348997134!3d-23.571638084602665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5996048af781%3A0x9856d09e924a4d99!2sRadisson+Paulista+Plaza!5e0!3m2!1sen!2sbr!4v1561326556291!5m2!1sen!2sbr" width="400" height="300" allowfullscreen></iframe>
                    </Art>         
                </Grid>
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

export default Where;
