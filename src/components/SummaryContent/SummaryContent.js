import styled from 'styled-components'
import { Link } from "gatsby"

import media from '../../utils/media'

export const PostLink = styled(Link)`
  display: block;
  margin-bottom: 3rem;
  color: ${props => props.theme.baseTextColour};

  :hover {
    text-decoration: none;
  }
`

export const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  ${PostLink}:hover & {
    text-decoration: underline;
  }
`

export const Excerpt = styled.div`
  font-size: 1rem;
  margin-top: 0;
`

export const PostDate = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.125rem;
  font-size: 0.875rem;
  color: ${props => props.theme.lightTextColour};

  ${media.tablet`
    margin-top: 1.5rem;
  `}
`