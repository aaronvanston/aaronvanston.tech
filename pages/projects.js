import { inCategory, withPostsFilterBy } from 'nextein/posts'

import PageTitle from '../components/PageTitle/PageTitle'
import Container from '../components/Container/Container'

const withProjects = withPostsFilterBy(inCategory('projects'))

const Projects = ({ posts: projects }) => (
  <Container>
    <PageTitle>My projects —</PageTitle>
    {projects.map((project) => <h3>{project.data.title}</h3>)}
    <pre>{JSON.stringify(projects, null, 2)}</pre>
  </Container>
)

export default withProjects(Projects)