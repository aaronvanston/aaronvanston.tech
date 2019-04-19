import React from 'react';
import styled from 'styled-components'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Document from '../Document/Document'
import media from '../../utils/media'

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #ffffff;
`

const Inner = styled.div`
  flex: 1;
  margin-bottom: 2rem;

  ${media.mobile`
    margin-bottom: 4rem;
  `}
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