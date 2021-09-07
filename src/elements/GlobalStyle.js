//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: #a8d2e3;
    font-family: Verdana, Helvetica, sans-serif;
}

img {
    width: 100%;
    object-fit: contain;
}
`;

export default GlobalStyle;
