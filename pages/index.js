import withContent from 'nextein/posts'
import parition from 'lodash/partition'

import Hero from '../components/Hero/Hero'
import Container from '../components/Container/Container'
import HomeSection from '../components/HomeSection/HomeSection'


const Home = ({ posts: content }) => {
  const [posts, projects] = parition(content, ['data.category', 'posts'])
  console.log(projects)

  return (
    <>
      <Container>
        <Hero />
      </Container>

      <HomeSection title="Recent Projects">
        {/* Map over 4 highlighted projects */}
        {/* View more */}

        {posts.map((post) => <h3>{post.data.title}</h3>)}
      </HomeSection>

      <HomeSection title="Latest Posts" flipPattern>
        {/* Show latest 5 posts*/}
        {/* View more */}
        {projects.map((project) => <h3>{project.data.title}</h3>)}
      </HomeSection>
    </>
  )
}

export default withContent(Home);