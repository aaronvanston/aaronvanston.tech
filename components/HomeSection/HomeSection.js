import React from 'react';
import styled, { css } from 'styled-components'

import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'

const Section = styled.section`
  margin-bottom: 6rem;
  position: relative;
`
const PatternWrapper = styled.div`
  display: none;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 10rem;
  }
`

const size = 0.4;

const Pattern = styled.div`
  background:radial-gradient(black 10%, transparent 11%), radial-gradient(black 10%, transparent 11%), white;
  background-position: 0 0, ${size}rem ${size}rem;
  background-size: ${size * 2}rem ${size * 2}rem;
  opacity: 0.5;

  grid-column-start: 1;
  grid-column-end: 2;

  ${props => props.flipPattern && css`
      grid-column-start: 2;
      grid-column-end: 4;
  `}
`

const ContentWrapper = styled.div`
  @supports (display: grid) {
    position: relative;
    top: -5rem;
  }
`

const HomeSection = ({ title, flipPattern, children }) => {
  return (
    <Section>
      <PatternWrapper>
        <Pattern flipPattern={flipPattern} />
      </PatternWrapper>

      <Container>
        <ContentWrapper>
          <SectionTitle>{title}</SectionTitle>
          {children}
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default HomeSection;