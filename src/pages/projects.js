import React from 'react';

import Page from '../components/Page/Page'
import PageTitle from '../components/PageTitle/PageTitle'
import Container from '../components/Container/Container'
import PostSummary from '../components/PostSummary/PostSummary'

const Projects = ({ data: { allMarkdownRemark: { edges: projects } } }) => {
  console.log(projects)
  return (
    <Page>
      <Container>
        <PageTitle>My projects —</PageTitle>
        <PostSummary posts={projects} />
      </Container>
    </Page>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {  
        fileAbsolutePath: { regex: "/content/projects/" }
       }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 100
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 80)
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            path
            title
          }
        }
      }
    }
  }
`

export default Projects;
