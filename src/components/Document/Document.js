import React from 'react';
import { Normalize } from 'styled-normalize'
import { ThemeProvider } from 'styled-components'

import theme from '../../utils/themeSettings'
import GlobalStyles from '../../styles/GlobalStyles'
import FontFaces from '../../styles/FontFaces'
import Meta from '../Meta/Meta'

const Document = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Normalize />
        <GlobalStyles />
        <FontFaces />
        <Meta />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Document;