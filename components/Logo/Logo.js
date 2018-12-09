import React from 'react';
import styled from 'styled-components'
import Link from 'next/link'

const StyledLogo = styled.a`
  color: ${props => props.theme.baseTextColor};
  font-weight: 800;
  font-style: normal;
  font-size: 1.5rem;
`

const Logo = () => {
  return (
    <Link href="/">
      <StyledLogo>Aaron Vanston</StyledLogo>
    </Link>
  );
};

export default Logo;