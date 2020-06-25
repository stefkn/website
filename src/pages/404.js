import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import { Container } from '@components/global';

import Footer from '@sections/Footer';
import Navbar from '@common/Navbar';

import styled from 'styled-components';

const NotFoundPage = () => (
  <Layout>
    <Navbar />
    <MainMatter>
      <h1>404 Not Found</h1>
      <p>Sad face.</p>
      <Link to="/">Go back to the homepage</Link>
    </MainMatter>
    <Footer />
  </Layout>
);

const MainMatter = styled.div`
  margin-top: 26vh;
  margin-bottom: 12vh;
  padding-left: 17vw;
  padding-right: 17vw;

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    // margin-bottom: 96px;
  }
`;

export default NotFoundPage;
