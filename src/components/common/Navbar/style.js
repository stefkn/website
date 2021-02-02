import styled from 'styled-components';

import { Container } from '@components/global';

export const Nav = styled.nav`
  padding: 16px 0;
  background-color: ${props => props.theme.color.primary};
  position: fixed;
  width: 100%;
  height: 5em;
  top: 0;
  z-index: 1000;
  -webkit-transition: background-color 500ms linear;
  -ms-transition: background-color 500ms linear;
  transition: background-color 500ms linear;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }

`;

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};

  a {
    text-decoration: none;
    opacity: 0.7;
    color: white;
  }

  &.active {
    a {
      opacity: 1;
    }
  }
`;

export const MobileMenu = styled.div`
  width: 100%;

  width: 100%;
  height: 18vh;
  /* background: ${props => props.theme.color.primary}; */
  /* background-color: white; */
  /* background: -moz-linear-gradient(top, rgba(0,20,255,1) 0%, rgba(229,229,229,0.02) 98%, rgba(229,229,229,0) 100%); */
  /* background: -webkit-linear-gradient(top, rgba(0,20,255,1) 0%,rgba(229,229,229,0.02) 98%,rgba(229,229,229,0) 100%); */
  background: linear-gradient(to bottom,rgba(0, 20, 255, 0.93) 0%,rgb(254,47,132) 98%,rgb(254,47,132) 100%);

  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;

  animation: fadeOut ease 1s;
  -webkit-animation: fadeOut ease 1s;
  -moz-animation: fadeOut ease 1s;
  -o-animation: fadeOut ease 1s;
  -ms-animation: fadeOut ease 1s;


  @keyframes fadeIn{
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-ms-keyframes fadeOut {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  @keyframes fadeOut{
    0% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @-moz-keyframes fadeOut {
    0% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @-o-keyframes fadeOut {
    0% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @-ms-keyframes fadeOut {
    0% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }
`;

export const Brand = styled.div`
  font-family: ${props => props.theme.font.primary};
  color: white;
  ${props => props.theme.font_size.large};
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`;
