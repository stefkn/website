import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import GithubIcon from '@static/icons/github.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import TwitterIcon from '@static/icons/twitter.svg';

const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/stefkn',
  }
  // {
  //   icon: InstagramIcon,
  //   link: 'https://instagram.com/ajay_ns',
  // },
  // {
  //   icon: TwitterIcon,
  //   link: 'https://twitter.com/ajayns08',
  // },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_deer: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "deer" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Art>
          <Img
            fluid={data.art_deer.childImageSharp.fluid}
            style={{ width: 480, maxWidth: '100%', marginBottom: -16 }}
          />
        </Art>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h2>ste.ken.now</h2>
              <span>
                code & illustrations by stefan
              </span>
              <br />
              <SmallText>
                <p style={{'fontWeight': '500'}}>〄 ♻︎ ☯︎</p>
                <p> MIT License | Hand-distilled in small batches with <a href="https://www.gatsbyjs.org/">Gatsby</a> and <a href="https://reactjs.org/">React</a>.</p>
                <p>Header animation using <a href="https://threejs.org/">three.js</a>. Absurd Gatsby starter by <a href="https://github.com/ajayns">@ajayns</a>. Queries by <a href="https://graphql.org/">GraphQL</a>.</p>
              </SmallText>
            </Copyright>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const SmallText = styled.div`
  p {
    font-size: 12px;
    font-weight: 200;
    line-height: 14px !important;
    margin-top: 10px;
    color: white;

    a {
      text-decoration: underline;
    }
  }
`

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 34px;
    height: 34px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
  color: white;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: white;
  text-align: left;
  -webkit-font-smoothing: antialiased;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
  top: 16px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
