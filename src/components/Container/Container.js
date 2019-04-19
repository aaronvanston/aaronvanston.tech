import styled from 'styled-components'

const setMaxWidth = (props) =>
  props.tight ? props.theme.maxWidthSmall : props.theme.maxWidth


const Container = styled.div`
  max-width: ${props => setMaxWidth(props)};
  width: 100%;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

export default Container;