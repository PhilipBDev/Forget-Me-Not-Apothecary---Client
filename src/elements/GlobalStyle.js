//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body, html {
    margin: 0;
    padding: 0;
    background-color: #a8d2e3;
}
`;

export default GlobalStyle;
