import styled from 'styled-components'

import media from '../../utils/media'

const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  ${media.tablet`
    font-size: 2.5rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  `}
`

export default PageTitle