import React from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"

import media from '../../utils/media'

// const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }

// // TODO: move to util file
// const formatDate = (date) =>
//   new Date(date).toLocaleDateString('en-AU', dateOptions)

const PostLink = styled(Link)`
  display: block;
  margin-bottom: 3rem;
`

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  ${PostLink}:hover & {
    text-decoration: underline;
  }
`

const Excerpt = styled.div`
  font-size: 1rem;
  margin-top: 0;
`

const PostDate = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.125rem;
  font-size: 0.875rem;
  color: ${props => props.theme.lightTextColor};

  ${media.tablet`
    margin-top: 1.5rem;
  `}
`

const PostSummary = ({ posts }) => {
  return (
    <div>
      {posts.map((postNode) => {
        const { frontmatter, id, excerpt } = postNode.node
        const post = { ...frontmatter, id, excerpt }
        return (
          <PostLink key={post.id} to={post.path}>
            <Title>{post.title}</Title>
            <Excerpt>{post.excerpt}</Excerpt>
            <PostDate>{post.date}</PostDate>
            <div>—</div>
          </PostLink>
        )
      })}
    </div>
  );
};

export default PostSummary;