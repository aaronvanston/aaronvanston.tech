import React from 'react';

import {
  PostLink,
  Title,
  Excerpt,
  PostDate,
} from '../SummaryContent/SummaryContent'

const PostSummary = ({ posts }) => {
  return (
    <div>
      {posts.map((postNode) => {
        const { frontmatter, id, excerpt } = postNode.node
        const post = { ...frontmatter, id, excerpt }
        return (
          <PostLink key={post.id} to={post.path}>
            <Title>{post.title}</Title>
            <Excerpt>{post.subtitle || post.excerpt}</Excerpt>
            <PostDate>{post.date}</PostDate>
            <div>—</div>
          </PostLink>
        )
      })}
    </div>
  );
};

export default PostSummary;