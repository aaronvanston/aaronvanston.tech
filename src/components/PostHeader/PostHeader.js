import React from 'react';
import styled from 'styled-components'

import media from '../../utils/media'

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  line-height: 1.25;
  letter-spacing: 0;
`

const SubTitle = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: ${props => props.theme.lightTextColour};

  ${media.mobile`
    font-size: 1.5rem;
  `}
`

const Date = styled.p`
  margin-top: 0;
  margin-bottom: 0.125rem;
  font-size: 0.875rem;
  color: ${props => props.theme.lightTextColour};

  ${media.tablet`
    margin-top: 1.5rem;
  `}
`

const TechUsed = styled.p`
  font-size: 1rem;

  & > span {
    font-family: monospace;
    margin-left: 0.5rem;
  }
`

const PostHeader = ({ title, subtitle, date, tech }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      {tech &&
        <TechUsed>Built using: <span>{tech.join(", ")}</span></TechUsed>
      }
      <Date>{date}</Date>
      <div>—</div>
    </Wrapper>
  );
};

export default PostHeader;