import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  scroll-snap-align: center;
  display: flex;
  width: 100vw;
  height: 95vh;
  flex-direction: column;
  justify-content: space-between;
`

const Section = styled.div`
  display: flex;
`


function Hero() {
  return (
    <Container>
        <Section>
        </Section>
    </Container>
    
  )
}

export default Hero
