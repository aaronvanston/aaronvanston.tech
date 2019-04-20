import React from 'react';
import styled from 'styled-components'

import PatternBlock from '../PatternBlock/PatternBlock'
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'

const PatternWrapper = styled.div`
  display: none;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 10rem;
    
    @media (min-width: 81rem) {
      grid-template-columns: 1fr 75rem 1fr;
    }
  }
`

const ContentWrapper = styled.div`
  @supports (display: grid) {
    position: relative;
    margin-top: -7rem;
  }
`

const Section = styled.section`
  margin-bottom: 3rem;

  :last-child {
    margin-bottom: 0;
  }
`

const HomeSection = ({ title, flipPattern, children }) => {
  return (
    <Section>
      <PatternWrapper>
        <PatternBlock flipPattern={flipPattern} />
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