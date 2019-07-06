import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const JOBS = [
    {
      name: 'Core Systems Integration Developer (Remote/Anywhere)',
      image: 'collabora.png',
      link: 'https://www.collabora.com/careers.html',
    },
    {
      name: 'Linux Kernel Developer (Remote/Anywhere)',
      image: 'collabora.png',
      link: 'https://www.collabora.com/careers.html',
    },
    {
      name: 'Linux Graphics Developer (Remote/Anywhere)',
      image: 'collabora.png',
      link: 'https://www.collabora.com/careers.html',
    },
    {
      name: 'Open Source Software Developer (Remote/Anywhere)',
      image: 'collabora.png',
      link: 'https://www.collabora.com/careers.html',
    },
    {
      name: 'Multimedia Software Developer (Remote/Anywhere)',
      image: 'collabora.png',
      link: 'https://www.collabora.com/careers.html',
    },
    {
      name: 'Systems Administration Manager (Remote/Anywhere)',
      image: 'collabora.png',
      link: 'https://www.collabora.com/careers.html',
    },
    {
      name: 'Software Developer - Tools & Infrastructure (Remote/Anywhere)',
      image: 'collabora.png',
      link: 'https://www.collabora.com/careers.html',
    },
    {
      name: 'Library Optimization Developer',
      image: 'ibm.png',
      link: 'https://krb-sjobs.brassring.com/TGnewUI/Search/home/HomeWithPreLoad?PageType=JobDetails&partnerid=26059&siteid=5016&Areq=241416BR#jobDetails=256537_5016',
    },
]

const JobsList = () => (
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { sourceInstanceName: { eq: "logos" } }) {
            edges {
              node {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Section id="jobs">
          <Container style={{ position: 'relative' }}>
            <h1>Open Positions at our Sponsors</h1>
            <JobsGrid>
              {JOBS.map(({ name, image, link }) => {
                const img = data.allFile.edges.find(
                  ({ node }) => node.relativePath === image
                ).node;
  
                return (
                  <div>
                    <StyledExternalLink href={link}>
                      <Img
                        fluid={img.childImageSharp.fluid}
                        alt={name}
                      />
                      <Title>{name}</Title>
                    </StyledExternalLink>
                  </div>
                );
              })}
            </JobsGrid>
          </Container>
        </Section>
      )}
    />
  );
  
  const JobsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-template-rows: min-content;
    grid-gap: 50px;
    justify-content: space-between;
    margin-top: 72px;
  
    @media (max-width: ${props => props.theme.screen.lg}) {
      justify-content: start;
    }
  
    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
  
    @media (max-width: ${props => props.theme.screen.xs}) {
      grid-gap: 24px;
    }
  `;
  
  const Title = styled.p`
    margin-top: 16px;
    color: ${props => props.theme.color.black.regular};
  `;
  
  const Subtitle = styled.p`
    ${props => props.theme.font_size.small};
    color: ${props => props.theme.color.black.light};
  `;
  
  const StyledExternalLink = styled(ExternalLink)`
    color: inherit;
    text-decoration: none;
    font-size: 2em;
    margin-top: 1em;
    float: right;
  
    &:hover {
      color: ${props => props.theme.color.black.regular};
    }
  `;
  
  export default JobsList;