import React from 'react';
import styled, { css } from 'styled-components'

const size = 0.5;

const colours = [
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFC107',
  '#FF9800',
  '#FF5722',
  '#000000'
]

const Pattern = styled.div`

  ${props => css`
    background: radial-gradient(${props.colour} 0%, transparent 11%), radial-gradient(${props.colour} 10%, transparent 11%), white;
  `}
  background-position: 1rem 1rem, ${size}rem ${size}rem;
  background-size: ${size * 2}rem ${size * 2}rem;
  opacity: 0.75;

  grid-column-start: 1;
  grid-column-end: 2;

  ${props => props.flipPattern && css`
      grid-column-start: 2;
      grid-column-end: 4;
  `}
`

const PatternBlock = ({ ...props }) => {
  const colour = colours[Math.floor(Math.random() * colours.length)];;
  return (
    <Pattern {...props} colour={colour} />
  );
};

PatternBlock.defaultProps = {
  colour: '#000000'
}


export default PatternBlock;