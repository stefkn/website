import { createGlobalStyle } from 'styled-components';

const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`;

const GlobalStyles = createGlobalStyle`
  ${normalize};

  ::selection {
    background: #ff418d7a;
    opacity: 0.85;
  }

  body {
    font-family: ${props => props.theme.font.secondary};
    background: #f7f7f7;
  }

  h1, h2, h3, p {
    margin: 0;
    font-weight: normal;
  }

  h1, h2 {
    font-family: ${props => props.theme.font.primary};
  }

  h1 {
    ${props => props.theme.font_size.xlarge};
  }

  h2 {
    ${props => props.theme.font_size.larger};
  }

  h3 {
    ${props => props.theme.font_size.large};
  }

  p {
    ${props => props.theme.font_size.regular};
    color: ${props => props.theme.color.black.light};
  }

  .dark-mode {
    html {
      background-color: #181a1b !important;
    }
    html, body, input, textarea, select, button {
        background-color: #181a1b;
    }
    html, body, input, textarea, select, button {
        border-color: #736b5e;
        color: #e8e6e3;
    }
    a {
        color: #3391ff;
    }
    table {
        border-color: #545b5e;
    }
    ::placeholder {
        color: #b2aba1;
    }
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        background-color: #555b00 !important;
        color: #e8e6e3 !important;
    }
    ::selection {
        background-color: #004daa !important;
        color: #e8e6e3 !important;
    }
    ::-moz-selection {
        background-color: #004daa !important;
        color: #e8e6e3 !important;
    }
    p {
      color: rgb(176, 169, 159);
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    h1 {
      ${props => props.theme.font_size.larger};
    }

    h2 {
      ${props => props.theme.font_size.large};
    }

    h3 {
      ${props => props.theme.font_size.regular};
    }

    p {
      ${props => props.theme.font_size.small};
    }
  }

  button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }
`;

export default GlobalStyles;
