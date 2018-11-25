import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: #000000;
    font-family: 'Muli', sans-serif;
    font-display: swap;
  }
`

export default GlobalStyles