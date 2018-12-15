import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { withRouter } from 'next/router'

const activeStyles = css`
  &:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`

const StyledAnchor = styled.a`
  color: ${props => props.theme.baseTextColor};
  position: relative;
  line-height: inherit;
  display: inline-block;
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
  transition: color .3s ease-in-out .1s,border-color .3s ease-in-out .1s;
  font-size: 1.125rem;
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

  &:hover {
    ${activeStyles}
  }

  ${props => props.active && activeStyles}
`

const NavLink = ({ children, to, router }) => {
  const isActive = (to == router.asPath);
  return (
    <Link href={to}>
      <StyledAnchor active={isActive}>{children}</StyledAnchor>
    </Link>
  );
};

export default withRouter(NavLink);