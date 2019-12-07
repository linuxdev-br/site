import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Travel = () => (
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
        <Section id="travel">
            <Container>
                <h1>Travel</h1>
                <br />
                <p>The closest airport is São Paulo – Congonhas(CGH), it is a major hub in Brazil
                and also receives a few international flights. An Uber from the airport to the
                conference neighborhood costs about 25 BRL. However, if flying from abroad,
                São Paulo – Cumbica(GRU) airport is a much better option, an Uber from there
                to São Paulo downtown is a one hour ride and costs around 70 BRL.</p>
                <br />
                <h3>Accomodation</h3>
                <br />
                <p><ExternalLink href="http://www.radissonpaulista.com.br/"> Radisson Paulista Plaza</ExternalLink> is
                offering 15% of discount for the conference dates with the discount code AMANDA15. There are also
                several hotels and Airbnb options in the region. The venue for August 3-4 is 3 minutes walk from
                the Brigadeiro metro station (Green line).</p>      

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

export default Travel;
