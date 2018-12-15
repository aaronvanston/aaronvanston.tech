import React from 'react';
import styled, { ThemeProvider } from 'styled-components'

import theme from '../../utils/themeSettings'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #ffffff;
`

const Inner = styled.div`
  flex: 1;
`

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header />
      <Inner>{children}</Inner>
      <Footer />
    </Wrapper>
  </ThemeProvider>
);

export default Page;