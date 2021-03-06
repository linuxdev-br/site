import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const PastEdition2019 = () => (
  <StaticQuery
    query={graphql`
      query {
        happy_hour: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "happy_hour" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        palco: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "palco" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        plateia: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "plateia" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        mesa: file(sourceInstanceName: { eq: "images" }, name: { eq: "mesa" }) {
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
            <Text> 
              <h1>Thank you for attending!</h1>
              <p>
                There are not enough words to describe how awesome the 2019
                edition was, but you can check out the pics and get the feeling
                of it!
              </p>
              <p>
                <StyledExternalLink href="https://photos.app.goo.gl/72KhU7LtxucnVoKb9">
                  See photos &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
            </Text>
            <Art>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SFgMSS7Jis4"
             frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
            </Art>
          </Grid>
          <PhotoGrid>
            <Art>
              <Img fluid={data.palco.childImageSharp.fluid} />
            </Art>
            <Art>
              <Img fluid={data.plateia.childImageSharp.fluid} />
            </Art>
            <Art>
              <Img fluid={data.happy_hour.childImageSharp.fluid} />
            </Art>
            <Art>
              <Img fluid={data.mesa.childImageSharp.fluid} />
            </Art>
          </PhotoGrid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: #f5f5f5;
  padding-top: 96px;
  padding-bottom: 50px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;
  border-radius: 2px;
  border: 10px solid #fff;
  box-shadow: 2px 2px 4px #aaa;

  > div {
    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
      border-radius: 10px;
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

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;
  margin-top: 50px;

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
  background-color: ${props => props.theme.color.primary};
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

export default PastEdition2019;
