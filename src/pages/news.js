import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Footer from '@sections/Footer';
import NewsList from '@sections/NewsList';

const News = () => (
  <Layout>
    <Navbar />
    <Header />
    <NewsList />
    <Footer />
  </Layout>
);

export default News;
