import styled from 'styled-components'

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`

export default Container;