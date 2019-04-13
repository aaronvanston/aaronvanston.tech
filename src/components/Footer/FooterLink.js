import styled from 'styled-components'

// Refactor to reuse navlink, switch colours
// using the ThemeProvider

const FooterLink = styled.a`
  color: #fff;
  margin-left: 2rem;

  :first-of-type {
    margin-left: 0;
  }

  :hover {
    text-decoration: underline;
  }
`

export default FooterLink;