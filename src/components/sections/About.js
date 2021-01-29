import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_deer: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "deer" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_code: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "code" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Frontmatter>
              <StyledText>
              Stefan Kenichiro Nowak is a <u>Software Engineer</u> at tails.com. Before that, he was a student of <u>Computer Science</u> at King's College London.
              </StyledText>
              <StyledSmaller>
              I like working with small and medium-sized teams on projects that have an impact, and I enjoy the challenge of learning to leverage new technologies and best practices. <br />I have over 5 years of experience programming with languages like Python, JavaScript and Java—and I still learn new things every day.
              </StyledSmaller>
              <StyledSmaller>
              Here is a small deer:
              </StyledSmaller>
        </Frontmatter>
      </Section>
    )}
  />
);

const StyledText = styled.div`
overflow-wrap: break-word;
-webkit-font-smoothing: antialiased;
letter-spacing: -.04em;
font-family: Inter, Helvetica, sans-serif;
font-weight: 400;
font-style: normal;
text-transform: none;
line-height: 1.232;
font-size: calc(4 * 1rem);
margin: 2rem 0;
color: #2f39ae;
margin-top: 0;
margin-bottom: 0;
white-space: pre-wrap;
margin-top: 2em;
`;

const StyledSmaller = styled.div`
overflow-wrap: break-word;
-webkit-font-smoothing: antialiased;
font-family: Inter, Helvetica, sans-serif;
font-weight: 400;
font-style: normal;
letter-spacing: -.01em;
text-transform: none;
line-height: 1.3328;
font-size: calc(2.2 * 1rem);
margin: 2rem 0;
color: #2f39ae;
margin-top: 0;
margin-bottom: 0;
white-space: pre-wrap;
margin-top: 4em;
`

const Frontmatter = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  max-width: 816px;
  display: block;
  margin: 16px auto;
  max-width: 50vw;

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;
    max-width: 80vw;
  }

  p {
    font-size: 20px;
    margin-top: 18px;
  }

  img {
    vertical-align: -5px;
  }



  .blinking-cursor {
    font-weight: 600;
    font-size: 30px;
    color: black;
    animation: 1s blink step-end infinite;


  }

  @keyframes "blink" {
    from, to {
      color: #ffffff00;
    }
    50% {
      color: black;
    }
  }

  @-moz-keyframes blink {
    from, to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }

  @-webkit-keyframes "blink" {
    from, to {
      color: #ffffff00;
    }
    50% {
      color: black;
    }
  }

  @-ms-keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }

  @-o-keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }
`;

export default About;
