import styled from 'styled-components'

import Hero from '../components/Hero/Hero'
import Container from '../components/Container/Container'
import SectionTitle from '../components/SectionTitle/SectionTitle'

const Section = styled.section`
  margin-bottom: 6rem;
`

export default () => (
  <Container>
    <Hero />

    <Section>
      <SectionTitle>Recent Projects</SectionTitle>
      {/* Map over 4 highlighted projects */}
      {/* View more */}
    </Section>

    <Section>
      <SectionTitle>Latest Posts</SectionTitle>
      {/* Show latest 5 posts*/}
      {/* View more */}
    </Section>
  </Container>
)