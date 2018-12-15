import React from 'react';
import styled from 'styled-components'

import media from '../../utils/media'

import Container from '../Container/Container'
import FooterLink from './FooterLink'

const FooterBlock = styled.div`
  background-color: #000;
  color: #fff;
`

const Wrapper = styled.div`
  min-height: 8.75rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  ${media.mobile`
    justify-content: space-between;
    flex-direction: row;
  `}
`

const footerLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aaronvanston/' },
  { name: 'CodePen', url: 'https://codepen.io/aaronvanston/' },
  { name: 'GitHub', url: 'https://github.com/aaronvanston' },
  { name: 'Twitter', url: 'https://twitter.com/aaronvanston' }
]

const Footer = () => {
  return (
    <FooterBlock>
      <Container>
        <Wrapper>
          <div>
            {footerLinks.map((link, index) => (
              <FooterLink key={index} href={link.url}>{link.name}</FooterLink>
            ))}
          </div>
          <div>© {(new Date()).getFullYear()} Aaron Vanston</div>
        </Wrapper>
      </Container>
    </FooterBlock>
  );
};

export default Footer;
