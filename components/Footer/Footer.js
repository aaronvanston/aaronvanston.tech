import React from 'react';
import styled from 'styled-components'

import Container from '../Container/Container'

const Wraper = styled.div`
  background-color: red;
  min-height: 1rem;
`

const Footer = () => {
  return (
    <Wraper>
      <Container>
        Footer
      </Container>
    </Wraper>
  );
};

export default Footer;