import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Sponsors from '@sections/Sponsors';
import Speakers from '@sections/Speakers';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Speakers />
    <Sponsors />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
