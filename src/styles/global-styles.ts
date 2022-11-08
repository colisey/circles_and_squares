import {createGlobalStyle} from 'styled-components';
import normalize from 'styled-normalize';

import {colors} from 'theme';
// import {globalDatePickerStyles} from 'ui/date-picker';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html *,
  html::after,
  html::before {
    box-sizing: inherit
  }
  
  html {
    box-sizing: border-box;
    height: 100%;
    font-size: 14px;
  }

  * {
    font-family: "Inter", sans-serif;
  }

  body {
    position: static !important;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    font-size: 14px;
    line-height: 1.4;
    background-color: #fdfdfd;
    color: ${colors.textPrimary};
  }

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .3);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .3);
}
  
  a {
    color: ${colors.link};
  }
`;
