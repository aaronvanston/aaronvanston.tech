import React from 'react';
import styled from 'styled-components'

import Container from '../Container/Container'

const Wraper = styled.div`
  background-color: green;
  min-height: 1rem;
`

const Header = () => {
  return (
    <Wraper>
      <Container>
        Header
      </Container>
    </Wraper>
  );
};

export default Header;