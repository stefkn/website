// import React from 'react';
// import styled from 'styled-components';
// import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

// import { Section, Container } from '@components/global';

// const About = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         art_deer: file(
//           sourceInstanceName: { eq: "art" }
//           name: { eq: "deer" }
//         ) {
//           childImageSharp {
//             fluid(maxWidth: 760) {
//               ...GatsbyImageSharpFluid_withWebp_tracedSVG
//             }
//           }
//         }

//         art_code: file(
//           sourceInstanceName: { eq: "art" }
//           name: { eq: "code" }
//         ) {
//           childImageSharp {
//             fluid(maxWidth: 760) {
//               ...GatsbyImageSharpFluid_withWebp_tracedSVG
//             }
//           }
//         }

//         art_ideas: file(
//           sourceInstanceName: { eq: "art" }
//           name: { eq: "ideas" }
//         ) {
//           childImageSharp {
//             fluid(maxWidth: 760) {
//               ...GatsbyImageSharpFluid_withWebp_tracedSVG
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <Section id="about">
//         <Container>
//           <Grid>
//             <div>
//               <h2>Code is The Easiest Part</h2>
//               <p>
//                 Engineers can get distracted by how clever their solution is.
//                 That might be great for winning code golf competitions, but truly
//                 valuable code can be understood and extended by anyone.
//               </p>
//             </div>
//             <Art>
//               <Img fluid={data.art_deer.childImageSharp.fluid} />
//             </Art>
//           </Grid>
//           <Grid inverse>
//             <Art>
//               <Img fluid={data.art_code.childImageSharp.fluid} />
//             </Art>
//             <div>
//               <h2>Nothing new to learn here</h2>
//               <p>
//                 Enjoy the power of the latest web technologies – React.js ,
//                 Webpack , modern JavaScript and CSS and more — all set up and
//                 waiting for you to start building.
//               </p>
//             </div>
//           </Grid>
//           <Grid>
//             <div>
//               <h2>Grow and build your ideas</h2>
//               <p>
//                 Waste no more time on tooling and performance. Focus on the the
//                 site you want to build and nothing more.
//                 <br />
//                 <br />
//                 Gatsby is fast in every way that matters.
//               </p>
//             </div>
//             <Art>
//               <Img fluid={data.art_ideas.childImageSharp.fluid} />
//             </Art>
//           </Grid>
//         </Container>
//       </Section>
//     )}
//   />
// );

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 3fr 2fr;
//   grid-gap: 40px;
//   text-align: right;
//   align-items: center;
//   justify-items: center;
//   margin: 24px 0;

//   ${props =>
//     props.inverse &&
//     `
//     text-align: left;
//     grid-template-columns: 2fr 3fr;
//   `}

//   h2 {
//     margin-bottom: 16px;
//   }

//   @media (max-width: ${props => props.theme.screen.md}) {
//     grid-template-columns: 1fr;
//     text-align: left;
//     margin-bottom: 96px;

//     &:last-child {
//       margin-bottom: 24px;
//     }

//     ${props =>
//       props.inverse &&
//       `
//         ${Art} {
//           order: 2;
//         }
//     `}
//   }
// `;

// const Art = styled.figure`
//   margin: 0;
//   max-width: 380px;
//   width: 100%;
// `;

// export default About;

// --------------------------------------------------------------
// --------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

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
  margin: 0 auto;

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;
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
