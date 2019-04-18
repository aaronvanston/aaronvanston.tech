const colour = {
  primary: '#ff6441',
  light: '#666666',
  dark: '#141414',

  white: '#fff',
  black: '#000',
}


const theme = {
  maxWidth: '85rem', // 1360px

  baseTextColour: colour.dark,
  lightTextColour: colour.light,
  highlightColour: colour.primary,
  linkColor: colour.primary,

  backgroundColour: colour.white,
  backgroundColourOverflow: colour.black,

  media: {
    desktop: 1024,
    tablet: 768,
    mobile: 576,
  }
}

export default theme