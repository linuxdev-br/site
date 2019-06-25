import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import styled from 'styled-components';

import Header from '@sections/Header';
import Footer from '@sections/Footer';
import { Section, Container } from '@components/global';

const Template = props => {
  const { frontmatter, html } = props.data.markdownRemark;
  console.log(frontmatter);

  return (
    <Layout>
      <Navbar />
      <Header />
      <Container>
        <Section>
          <Subtitle>{frontmatter.date}</Subtitle>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
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

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Template;
