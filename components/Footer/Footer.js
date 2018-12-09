import React from 'react';
import styled from 'styled-components'

import Container from '../Container/Container'

const Wraper = styled.div`
  background-color: #3f4041;
  min-height: 3rem;
`

const FooterText = styled.p`
  color: #fff;
`

const Footer = () => {
  return (
    <Wraper>
      <Container>
        <FooterText>Footer</FooterText>
      </Container>
    </Wraper>
  );
};

export default Footer;