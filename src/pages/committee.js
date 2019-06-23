import React from 'react';
import styled from 'styled-components';
import { Container } from '@components/global';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Footer from '@sections/Footer';

const Committee = () => (
  <Layout>
    <Navbar />
    <Header />
    <Container>
        <Content>
        <h1>Organizing Committee</h1>
        <br />
        <p>
         Bruno Dilly (ProFUSION) - <em>Finance Director</em><br />
         Gabriel F. T. Gomes (IBM) - <em>Program Director</em><br />
         Gustavo Padovan (Collabora) - <em>Executive Director</em><br />
         João Moreira (Suse)<br />
         Helen Koike (Collabora)<br />
         Ana Rute Mendes (Collabora) - <em>Website UX design</em><br />
         </p>
         <br />
         <p>Talk to us at <a href="mailto:contact@linuxdev-br.net">contact@linuxdev-br.net</a>.</p>
        </Content>
    </Container>
    <Footer />
  </Layout>
);

const Content = styled.div`
  justify-content: space-between;
  margin-top: 72px;
`;

export default Committee;