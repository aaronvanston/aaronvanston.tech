import React from 'react';
import styled from 'styled-components'

import Container from '../Container/Container'


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
        <div>Aaron Vanston</div>
        <div>NAV</div>
      </Inner>
    </Container>
  );
};

export default Header;