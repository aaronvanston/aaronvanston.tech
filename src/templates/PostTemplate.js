import React from "react"
import { graphql } from "gatsby"

import Page from '../components/Page/Page'
import Container from '../components/Container/Container'
import PageTitle from '../components/PageTitle/PageTitle'

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Page>
      <Container>
        <PageTitle>{frontmatter.title}</PageTitle>
        <h2>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Page>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default PostTemplate