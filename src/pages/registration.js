import React from 'react';
import styled from 'styled-components';
import { Container } from '@components/global';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Footer from '@sections/Footer';

const Registration = () => (
  <Layout>
    <Navbar />
    <Header />
    <Container>
        <Content>
        <h1>Registration</h1>
        <br />
        <div>
        <center> 
        <table><tbody>
            <tr><td><strong>Type</strong></td><td><strong>Until July 4th</strong></td><td><strong>Until Aug 1st</strong></td></tr>
            <tr><td>Regular</td><td>200 BRL</td><td>250 BRL</td></tr>
            <tr><td>Student</td><td>100 BRL</td><td>125 BRL</td></tr>
        </tbody></table>
        </center>
        </div>
        <div>
            <figure>
                <iframe src="https://eventbrite.com.br/tickets-external?eid=59091462154&amp;ref=etckt" frameborder="0" height="360" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe>
            </figure>
        </div>
        </Content>
    </Container>
    <Footer />
  </Layout>
);

const Content = styled.div`
  justify-content: center;
  margin-top: 72px;
`;

export default Registration;