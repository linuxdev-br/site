import React from 'react';
import styled from 'styled-components';
import { Container } from '@components/global';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Footer from '@sections/Footer';

const News = () => (
  <Layout>
    <Navbar />
    <Header />
    <Container>
        <Content>
        <h1>Our Mission</h1>
        <br />
        <p>
            Linux Developer Conference Brazil is an international meeting point in Brazil for
            the community developing Free and Open Source Software (FOSS) for the Core of 
            Linux systems and it myriad of platforms – mobile, TVs, cars, home appliances, IoT,
            Cloud and others.
        </p>
        <br />
        <p>
            By providing a place for developers, enthusiasts and companies to connect, we 
            intend not only to help grow the FOSS community and market in Brazil, but also
            forge a link between the Brazilian community and the rest of the world.
        </p>
        <br />
        <p>
            We believe that in order to grow a strong upstream community in Brazil, our
            industry needs to play an important role in understanding FOSS values and its
             benefits to product development – be it the freedom of choosing which software
              to use, faster time to market or more secure software stacks. Inviting
              companies to the conference and educating them on how to be FOSS citizens
              is one of our core values.
        </p>
        <br />
        <p>
            Moreover, the conference focus is exclusively towards upstream contributions
             to FOSS projects. Getting players in the global market to understand FOSS
              values and encouraging them to be part of the community will be one of
               our main challenges in the time to come.
        </p>
        <br />
        <p>
            Supporting an environment where all that can flourish is the founding
             tenet of linuxdev-br!
        </p>
        </Content>
    </Container>
    <Footer />
  </Layout>
);

const Content = styled.div`
  justify-content: space-between;
  margin-top: 72px;
`;

export default News;