import React from 'react'
import { Link } from "gatsby"
import styled, { css } from 'styled-components'

import media from '../../utils/media'

const activeStyles = css`
  &:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`

const StyledAnchor = styled(Link)`
  color: ${props => props.theme.baseTextColour};
  position: relative;
  line-height: inherit;
  display: inline-block;
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
  transition: color .3s ease-in-out .1s,border-color .3s ease-in-out .1s;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: .6px;
  margin-left: 2rem;

  :first-of-type {
    margin-left: 0;
  }

  &:after {
    content: "";
    position: absolute;
    width: 0;
    bottom: 0;
    height: 2px;
    background: currentColor;
    right: 0;
    transition: width .3s cubic-bezier(.37,0,.21,1.02);
  }

  &:hover, &.active {
    ${activeStyles}
    text-decoration: none;
  }

  ${media.mobile`
    font-size: 1.125rem;
  `}
`

const NavLink = ({ children, to, router }) => (
  <StyledAnchor activeClassName="active" to={to}>{children}</StyledAnchor>
);

export default NavLink;