import React from 'react';
import styled from 'styled-components'

import { Content } from 'nextein/post'
import { sortByDate } from 'nextein/posts'
import Link from 'nextein/link'

import media from '../../utils/media'

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const PostLink = styled.a`
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

const Excerpt = styled(Content)`
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

const PostSummary = ({ posts, postLimit }) => {
  const sortedPosts = posts.sort(sortByDate)
  const summaryPosts = postLimit ? sortedPosts.slice(0, postLimit) : sortedPosts

  return (
    <div >
      {summaryPosts.map((post, idx) => {
        const date = new Date(post.data.date).toLocaleDateString('en-AU', dateOptions)
        return (
          <Link {...post}>
            <PostLink key={`${post.data.title}-${idx}`}>
              <Title>{post.data.title}</Title>
              <Excerpt {...post} excerpt />
              <PostDate>{date}</PostDate>
              <div>—</div>
            </PostLink>
          </Link>
        )
      })}
    </div>
  );
};

export default PostSummary;