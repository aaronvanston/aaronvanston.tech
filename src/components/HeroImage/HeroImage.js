import React from 'react';
import Image from 'gatsby-image'
import styled from 'styled-components'

import media from '../../utils/media'

const ImageContainer = styled.div`
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 2rem;

  ${media.desktop` 
    padding-left: 1.5rem;
    padding-right: 1.5rem;  
  `}
`

const HeroImage = ({ heroImage }) => {
  if (!heroImage) {
    return null
  }

  const heroSizes = heroImage.childImageSharp.sizes
  return (
    <ImageContainer>
      <Image sizes={heroSizes} />
    </ImageContainer>
  )
}

export default HeroImage