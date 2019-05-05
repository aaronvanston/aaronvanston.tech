import React from "react"
import { graphql } from "gatsby"

import Page from '../components/Page/Page'
import Container from '../components/Container/Container'
import Meta from '../components/Meta/Meta'
import Content from '../components/Content/Content'
import HeroImage from '../components/HeroImage/HeroImage'
import PostHeader from '../components/PostHeader/PostHeader'

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title, date, hero, subtitle, tech } = frontmatter

  return (
    <Page>
      <Meta title={title} />
      <Container tight>
        <PostHeader title={title} subtitle={subtitle} date={date} tech={tech} />
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
      ...MdFrontmatter
    }
  }
`

export default PostTemplate