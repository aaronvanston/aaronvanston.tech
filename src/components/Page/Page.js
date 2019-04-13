import React from 'react';
import styled from 'styled-components'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Document from '../Document/Document'

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
  <Document>
    <Wrapper>
      <Header />
      <Inner>{children}</Inner>
      <Footer />
    </Wrapper>
  </Document>
);

export default Page;