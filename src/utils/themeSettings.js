const colour = {
  primary: '#ff6441',
  primaryDark: '#b2462d',
  lightGrey: '#c6cbd1',
  grey: '#666666',
  darkGrey: '#141414',

  white: '#fff',
  offWhite: '#f6f8fa',
  black: '#000',
}


const theme = {
  maxWidth: '85rem', // 1360px
  maxWidthSmall: '50rem', // 800px

  media: {
    desktop: 1024,
    tablet: 768,
    mobile: 576,
  },

  baseTextColour: colour.darkGrey,
  lightTextColour: colour.grey,
  highlightColour: colour.primary,
  linkColor: colour.primaryDark,

  backgroundColour: colour.white,
  backgroundColourOverflow: colour.black,

  colour,
}

export default theme