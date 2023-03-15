import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  margin:auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 10px;
  padding: 3rem 5rem;
  background-color: #da4831;
  box-shadow: 0 4px 8px gray;
`

const Title = styled.h2`
  color:white;
  margin: 2rem 0;
`

const Subtext = styled.p`
  
`
const Failure = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Order Failed</Title>
        <Subtext>Please try again!</Subtext>
      </Wrapper>
    </Container>
  )
}

export default Failure
