import { inCategory, withPostsFilterBy } from 'nextein/posts'

import PageTitle from '../components/PageTitle/PageTitle'
import Container from '../components/Container/Container'

const withPosts = withPostsFilterBy(inCategory('posts'))

const Posts = ({ posts }) => (
  <Container>
    <PageTitle>Latest blog posts —</PageTitle>
    {posts.map((post) => <h3>{post.data.title}</h3>)}
    <pre>{JSON.stringify(posts, null, 2)}</pre>
  </Container>
)

export default withPosts(Posts)
