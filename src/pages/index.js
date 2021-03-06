import React from "react"
import { graphql } from 'gatsby'

import Page from '../components/Page/Page'
import Hero from '../components/Hero/Hero'
import Container from '../components/Container/Container'
import HomeSection from '../components/HomeSection/HomeSection'
import PostSummary from '../components/PostSummary/PostSummary'
import ProjectSummary from '../components/ProjectSummary/ProjectSummary'

const Home = ({ data: { posts, projects } }) => (
  <Page>
    <Container>
      <Hero />
    </Container>

    <HomeSection title="Recent Projects">
      <ProjectSummary projects={projects.edges} />
    </HomeSection>

    <HomeSection title="Latest Posts" flipPattern>
      <PostSummary posts={posts.edges} />
    </HomeSection>
  </Page>
)

// TODO: Add "featured" flag filtering
export const query = graphql`
  query {
    posts: allMarkdownRemark(
      filter: {  
        fileAbsolutePath: { regex: "/content/posts/" }
       }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
    ) {
      ...PostSummary
    }
    projects: allMarkdownRemark(
      filter: {  
        fileAbsolutePath: { regex: "/content/projects/" }
       }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
    ) {
      ...PostSummary
    }
  }
`

export default Home
