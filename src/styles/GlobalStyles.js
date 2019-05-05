import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: ${props => props.theme.backgroundColourOverflow};
    font-family: 'Muli', sans-serif;
  }

  a {
    color: ${props => props.theme.linkColor};
    text-decoration: none;
    cursor: pointer;
    
    :hover {
      text-decoration: underline;
    }
  }

  h1, h2, h3 ,h4 ,h5 ,h6 {
    font-family: 'Merriweather', serif;
  }

  ::selection {
    background-color: ${props => props.theme.highlightColour};
    color: ${props => props.theme.baseTextColour};
  }
`

export default GlobalStyles