import Hero from '../components/Hero/Hero'
import Container from '../components/Container/Container'
import HomeSection from '../components/HomeSection/HomeSection'

export default () => (
  <>
    <Container>
      <Hero />
    </Container>
    <HomeSection title="Recent Projects">
      {/* Map over 4 highlighted projects */}
      {/* View more */}
    </HomeSection>

    <HomeSection title="Latest Posts" flipPattern>
      {/* Show latest 5 posts*/}
      {/* View more */}
    </HomeSection>
  </>
)