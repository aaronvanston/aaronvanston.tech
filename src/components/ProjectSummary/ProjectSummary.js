import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

import {
  PostLink,
  Title,
  Excerpt,
  PostDate,
} from '../SummaryContent/SummaryContent'

import media from '../../utils/media'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Col = styled.div`
  flex: 1 1 100%;
  max-width: 100%;

  ${media.mobile` 
    flex: 1 1 50%;
    max-width: 50%;
  `}

  ${media.desktop` 
    flex: 1 1 25%;
    max-width: 25%;
  `}
`

const SummaryContainer = styled.div`
  padding-right: 2rem;
`

const ProjectSummary = ({ projects }) => {
  return (
    <Row>
      {projects.map((projectNode) => {
        const { frontmatter, id, excerpt } = projectNode.node
        const project = { ...frontmatter, id, excerpt }
        const hero = project.hero.childImageSharp.sizes
        return (
          <Col key={project.id} >
            <PostLink to={project.path}>
              <Image sizes={hero} />
              <SummaryContainer>
                <Title>{project.title}</Title>
                <Excerpt>{project.subtitle || project.excerpt}</Excerpt>
                <PostDate>{project.date}</PostDate>
                <div>—</div>
              </SummaryContainer>
            </PostLink>
          </Col>
        )
      })}
    </Row>
  );
};

export default ProjectSummary;
