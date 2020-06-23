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
              <h2>Hi there.</h2>
              <p>
              Thanks for stopping by.

I'm a developer from London, UK; a freshly-minted, bright-eyed, dewy-faced computer science undergraduate-and-postgraduate-graduate by means of King's College London, my sanity, and an eye-watering amount of government-subsidized debt, et al.

My key language competencies are currently Python, JavaScript and Java. I'm currently exploring Kotlin, Rust and Go.
              </p>
            </div>
        </Frontmatter>
      </Section>
    )}
  />
);

const Frontmatter = styled.div`
  padding-left: 17vw;
  padding-right: 17vw;

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;
  }
`;

export default About;
