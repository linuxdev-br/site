import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import styled from 'styled-components';

import Header from '@sections/Header';
import Footer from '@sections/Footer';
import { Section, Container } from '@components/global';

const Template = props => {
  const { frontmatter, html } = props.data.markdownRemark;
  const { prev, next } = props.pageContext;
  console.log(props.pageContext);

  return (
    <Layout>
      <Navbar />
      <Header />
      <Container>
        <Section>
          <Subtitle>{frontmatter.date}</Subtitle>
          <h1>{frontmatter.title}</h1>
          <PostBody dangerouslySetInnerHTML={{ __html: html }} />
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {prev && (
                <Arrow>
                  <Link to={prev.frontmatter.path} rel="prev">
                    ← {prev.frontmatter.title}
                  </Link>
                </Arrow>
              )}
            </li>
            <li>
              {next && (
                <Arrow>
                  <Link to={next.frontmatter.path} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </Arrow>
              )}
            </li>
          </ul>
        </Section>
      </Container>
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

const PostBody = styled.div`
  p {
    margin: 1.5em 0;
  }
`;

const Subtitle = styled.p`
  margin: 1em 0;
  font-family: sans;
  ${props => props.theme.font_size.small};
  color: #aaa;
`;

const Arrow = styled.div`
  a {
    text-decoration: none;
    font-size: 2em;
    font-family: sans-serif;
    font-weight: bold;
    color: #fff;
    background-color: #f8a12e;
    padding: 0 5px;
    border-radius: 5px;

    &:hover {
      color: #444;
      background-color: #ff9406;
    }
  }
`;

export default Template;
