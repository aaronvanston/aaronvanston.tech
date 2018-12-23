import { inCategory, withPostsFilterBy } from 'nextein/posts'

import PageTitle from '../components/PageTitle/PageTitle'
import Container from '../components/Container/Container'
import PostSummary from '../components/PostSummary/PostSummary'

const withPosts = withPostsFilterBy(inCategory('posts'))

const Posts = ({ posts }) => (
  <Container>
    <PageTitle>Latest blog posts —</PageTitle>
    <PostSummary posts={posts} />
  </Container>
)

export default withPosts(Posts)
