import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Footer from '@sections/Footer';
import JobsList from '@sections/JobsList';

const Jobs = () => (
  <Layout>
    <Navbar />
    <Header />
    <JobsList />
    <Footer />
  </Layout>
);

export default Jobs;
