import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 2rem;
`

const SectionTitle = ({ children }) => {
  return (
    <Title>
      {/* Add flare/ background pattern */}
      {children}
    </Title>
  );
};

export default SectionTitle;