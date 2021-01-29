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
            <div>
              <h2 style={{'letterSpacing': '8px'}}>
                hello world<span className="blinking-cursor">_</span>
              </h2>
              <p>
                I'm a software developer <img style={{'height': '24px'}} src="https://emojis.slackmojis.com/emojis/images/1510581338/3186/developers.gif?1510581338"></img> from south-west London.
              </p>
              <p>
                I'm into—in no particular order—overusing emojis, friendly teams, web technologies, animal friends (I work at a literal <a href="https://lifeat.tails.com/tag/engineering/">dog company!</a> <img style={{'height': '24px'}} src="https://emojis.slackmojis.com/emojis/images/1595173218/9723/dog_cool.gif?1595173218"></img>), general tech stuff, <span style={{'fontFamily': 'Comic Sans MS', 'fontWeight': '600'}}>graphic design is my passion,</span> <a href="https://upload.wikimedia.org/wikipedia/commons/d/d2/The_Covfefe_Presidency_%2834287334213%29.jpg">covfefe</a>, learning all sorts, <b>food</b> (very important) and sleep. That list was nonexhaustive.
              </p>
              <p>
                Professionally, I'm strongest in backend development using Python (Flask & uWSGI), MySQL and modern JavaScript frontends. I've had experience using Java, Scala, Haskell, Kotlin, Swift and Go.
              </p>
            </div>
        </Frontmatter>
      </Section>
    )}
  />
);

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
