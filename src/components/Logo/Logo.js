import React from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"

const StyledLogo = styled(Link)`
  color: ${props => props.theme.baseTextColour};
  font-weight: 800;
  font-style: normal;
  font-size: 1.5rem;

  :hover {
    text-decoration: none;
  }
`

const Logo = () => {
  return (
    <StyledLogo to="/">AV</StyledLogo>
  );
};

export default Logo;