import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import PastEdition2019 from '@sections/PastEdition2019';
import About from '@sections/About';
import Sponsors from '@sections/Sponsors';
import Speakers from '@sections/Speakers';
import Where from '@sections/Where';
import Travel from '@sections/Travel';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <PastEdition2019 />
    <Sponsors />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
