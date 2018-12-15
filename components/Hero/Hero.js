import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 6rem;
  padding-bottom: 6rem;
`

const H1 = styled.h1`
  font-size: 4rem;
  margin: 0;
`

const Sub = styled.span`
  font-size: 0.5em;
`

const Description = styled.p`
  margin-top: 2rem;
  font-size: 1.5rem;
  max-width: 50%;
  line-height: 1.5;
`

const Hero = () => {
  return (
    <Wrapper>
      <H1>
        <Sub>Aaron Vanston —</Sub><br />
        Front-end developer.
      </H1>
      <Description>
        Hi, I'm Aaron Vanston, a front-end developer based in Melbourne, Australia. I specialise in delivering rich customer-centric experiences. Currently focusing on ReactJS based applications.
      </Description>
    </Wrapper>
  );
};

export default Hero;