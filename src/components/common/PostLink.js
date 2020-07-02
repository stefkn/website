import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

const PostLink = ({ post }) => (
  <PostEntry>
    <h3>
        <Link to={post.frontmatter.slug}>
        {post.frontmatter.title} ({post.frontmatter.date})
        </Link>
    </h3>
  </PostEntry>
)

export default PostLink

const PostEntry = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`;