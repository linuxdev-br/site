import React from 'react';

import Layout from '@common/2019/Layout';
import Navbar from '@common/2019/Navbar';

import Header from '@sections/2019/Header';
import PastEdition2019 from '@sections/2019/PastEdition2019';
import About from '@sections/2019/About';
import Sponsors from '@sections/2019/Sponsors';
import Speakers from '@sections/2019/Speakers';
import Where from '@sections/2019/Where';
import Travel from '@sections/2019/Travel';
import Faq from '@sections/2019/Faq';
import Footer from '@sections/2019/Footer';

const y2019Page = () => (
  <Layout>
    <Navbar />
    <Header />
    <PastEdition2019 />
    <About />
    <Speakers />
    <Sponsors />
    <Where />
    <Travel />
    <Faq />
    <Footer />
  </Layout>
);

export default y2019Page;
