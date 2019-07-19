import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import { Link } from '@reach/router';

const NewsList = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              frontmatter {
                title
                path
                date
                excerpt
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { edges } = data.allMarkdownRemark;

      return (
        <Section id="news" accent="secondary">
          <Container style={{ position: 'relative' }}>
            <h1>News</h1>
            <PostsGrid>
              {edges.map(edge => {
                const { frontmatter } = edge.node;
                return (
                  <div>
                    <BlogDate>{frontmatter.date}</BlogDate>
                    <Link to={frontmatter.path}>
                      <Title>{frontmatter.title}</Title>
                    </Link>
                    <p>{frontmatter.excerpt}</p>
                    <Link to={frontmatter.path}>Read more</Link>
                  </div>
                );
              })}
            </PostsGrid>
          </Container>
        </Section>
      );
    }}
  />
);

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 64px;
  margin-top: 96px;
  width: 100%;

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

const BlogDate = styled.span`
  color: #aaa;
  font-family: sans;
`;

export default NewsList;
