import withContent from 'nextein/posts'
import parition from 'lodash/partition'

import Hero from '../components/Hero/Hero'
import Container from '../components/Container/Container'
import HomeSection from '../components/HomeSection/HomeSection'
import PostSummary from '../components/PostSummary/PostSummary'

const Home = ({ posts: content }) => {
  const [posts, projects] = parition(content, ['data.category', 'posts'])

  return (
    <>
      <Container>
        <Hero />
      </Container>

      <HomeSection title="Recent Projects">
        {/* Map over 4 highlighted projects */}
        {/* View more */}
        {projects.map((project) => <h3>{project.data.title}</h3>)}
      </HomeSection>

      <HomeSection title="Latest Posts" flipPattern>
        <PostSummary posts={posts} postLimit={5} />
      </HomeSection>
    </>
  )
}

export default withContent(Home);