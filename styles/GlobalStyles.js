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
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  h1, h2, h3 ,h4 ,h5 ,h6 {
    font-family: 'Merriweather', serif;
  }
`

export default GlobalStyles