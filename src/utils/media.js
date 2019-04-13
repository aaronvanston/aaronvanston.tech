import { css } from 'styled-components';

import theme from './themeSettings'

const media = Object.keys(theme.media).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${theme.media[label] / 16}rem) {
      ${css(...args)}
    }
  `

  return acc
}, {});

export default media