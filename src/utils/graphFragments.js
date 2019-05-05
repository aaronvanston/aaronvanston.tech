import { graphql } from 'gatsby'

export const mdFrontmatter = graphql`
  fragment MdFrontmatter on MarkdownRemark {
    frontmatter {
      date(formatString: "DD MMMM YYYY")
      path
      title
      subtitle
      tech
      hero {
        childImageSharp{
          sizes(maxWidth: 1024) {
              ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`

export const postSummary = graphql`
  fragment PostSummary on MarkdownRemarkConnection {
    edges {
      node {
        id
        excerpt(pruneLength: 80)
        ...MdFrontmatter
      }
    }
  }
`