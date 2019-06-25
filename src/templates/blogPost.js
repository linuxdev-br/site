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
                <Link to={prev.frontmatter.path} rel="prev">
                  ← {prev.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.frontmatter.path} rel="next">
                  {next.frontmatter.title} →
                </Link>
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
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Template;
