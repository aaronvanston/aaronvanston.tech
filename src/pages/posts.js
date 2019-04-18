import React from 'react';
import { graphql } from "gatsby"

import Page from '../components/Page/Page'
import PageTitle from '../components/PageTitle/PageTitle'
import Container from '../components/Container/Container'
import PostSummary from '../components/PostSummary/PostSummary'
import Meta from '../components/Meta/Meta'

const posts = ({ data: { allMarkdownRemark: { edges: posts } } }) => {
  return (
    <Page>
      <Meta title="Posts" />
      <Container>
        <PageTitle>Latest blog posts —</PageTitle>
        <PostSummary posts={posts} />
      </Container>
    </Page>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {  
        fileAbsolutePath: { regex: "/content/posts/" }
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

export default posts;
