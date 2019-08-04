import React from 'react';
import styled from 'styled-components';
import { Container } from '@components/global';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Footer from '@sections/Footer';

const Feedback = () => (
  <Layout>
    <Navbar />
    <Header />
    <Container>
        <Content>
        <br />
         <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScPblxjm53Zhx_ypELVDuvfHHdCD373BsliMOhRl1udlilDNw/viewform?embedded=true" width="640" height="5063" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
         <br />
         <p>Talk to us at <a href="mailto:contact@linuxdev-br.net">contact@linuxdev-br.net</a>.</p>
        </Content>
    </Container>
    <Footer />
  </Layout>
);

const Content = styled.div`
  align-items: center;
  text-align: center;
  margin-top: 72px;
`;

export default Feedback;