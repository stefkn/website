import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import HeaderAnimation from '@components/HeaderAnimation'
import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <HeaderAnimation />
    <Navbar />
    <Header />
    <About />
    {/* <Brands /> */}
    {/* <Team /> */}
    {/* <Faq /> */}
    <Footer />
  </Layout>
);

export default IndexPage;
