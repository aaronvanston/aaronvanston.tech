import React from 'react';

import NavLink from './NavLink'

const Nav = () => (
  <div>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/posts">Blog</NavLink>
  </div>
);

export default Nav;