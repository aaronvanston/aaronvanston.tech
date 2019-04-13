import React from 'react';
import styled from 'styled-components'

import Container from '../Container/Container'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'


const Inner = styled.div`
  min-height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => {
  return (
    <Container>
      <Inner>
        <Logo />
        <Nav />
      </Inner>
    </Container>
  );
};

export default Header;