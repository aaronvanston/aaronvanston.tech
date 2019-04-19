import React from "react"
import { graphql } from "gatsby"

import Page from '../components/Page/Page'
import Container from '../components/Container/Container'
import PageTitle from '../components/PageTitle/PageTitle'
import Meta from '../components/Meta/Meta'
import Content from '../components/Content/Content'
import HeroImage from '../components/HeroImage/HeroImage'

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title, date, hero } = frontmatter

  return (
    <Page>
      <Meta title={title} />
      <Container tight>
        <PageTitle>{title}</PageTitle>
        <h2>{date}</h2>
      </Container>
      <HeroImage heroImage={hero} />
      <Container tight>
        <Content
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
        hero {
          childImageSharp{
            sizes(maxWidth: 1024) {
                ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

export default PostTemplate