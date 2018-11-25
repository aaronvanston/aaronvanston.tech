import React from 'react';
import styled from 'styled-components'

import Container from '../Container/Container'

const Wraper = styled.div`
  background-color: #3f4041;
  min-height: 3rem;
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