import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const headerstyle = {
  'fontFamily': 'Rubik',
  'fontSize': '114px',
  // 'color': 'rgb(255, 107, 107)',
  // 'mixBlendMode': 'difference',
  'mixBlendMode': 'color-dodge',
  'color': 'rgb(230, 200, 200)',
  'fontWeight': '400',
  'marginLeft': '-9px',
  'letterSpacing': '-5px',
  'zIndex': '5',
  'marginBottom': '21px'
}
const headersecondarystyle = {
  'fontFamily': 'IBM Plex Mono',
  'fontWeight': '400',
  'mixBlendMode': 'hard-light',
  'fontSize': '1em',
  'color': 'white',
  'lineHeight': '24px',
  'zIndex': '5',
  'position': 'relative'
}
const commentstyle = {
  'fontFamily': 'Roboto',
  'fontSize': '10px',
  'color': 'white',
  'display': 'contents'
}
const neumorph = {
  'height': '45px',
  'width': '160px',
  'borderRadius': '6px',
  'background': 'rgb(231, 61, 149)',
  'box-shadow': 'rgb(23, 33, 148) 22px 19px 32px',
  'marginTop': '1em',
  'position': 'absolute',
  'zIndex': '5'
}
const neumorphtext = {
  'color': 'white',
  'fontFamily': 'IBM Plex Mono',
  'fontWeight': '500',
  'paddingLeft': '10px',
  'paddingTop': '5px',
  'fontSize': '21px'
}

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_headerbg: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "headerbg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 673) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_headerbg.childImageSharp.fluid} />
            </Art>
            <Text>
              <h1 style={headerstyle} >
                Hello.
              </h1>
              <br />
              <p className="subtext" style={headersecondarystyle}>
                Stefan Kenichiro Nowak is <br /> a full-stack software engineer <br /> in 🇬🇧 London, UK.
              </p>
              {/* <div style={neumorph}>
                <p style={neumorphtext}>Click me!</p>
              </div> */}
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }

  @keyframes showTopText {
    0% { transform: translate3d(0, 100%, 0); opacity: 0%; }
    100% { transform: translate3d(0, 0, 0); opacity: 100%; }
  }

  @keyframes showSubText {
    0% { opacity: 0%; }
    100% { opacity: 100%; }
  }

  h1 {
    opacity: 0%;
    animation: showTopText 2s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    bottom: 0;
    transform: translate(0, 100%);
  }

  .subtext {
    opacity: 0%;
    animation: showSubText 4s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }
`;

const Art = styled.figure`
  width: 130%;
  margin: 0;
  top: 16px;
  z-index: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
      top: -101px;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
