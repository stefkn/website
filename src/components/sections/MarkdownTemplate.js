import React from "react";
import { graphql } from "gatsby";

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import About from '@sections/About';
import Footer from '@sections/Footer';

import styled from 'styled-components';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <Navbar />
        <Article>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </Article>
        <Footer />
    </Layout>
  )
}

const Article = styled.div`
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

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`