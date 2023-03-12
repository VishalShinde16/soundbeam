import React from 'react'
import styled from 'styled-components'

import img4 from '../images/4.jpg'

// const Container = styled.div`
//     height: 100vh;
//     background-image:url(${img4});
//     background-repeat: no-repeat;
//     background: linear-gradient(rgba(208,180,143,0.5),rgba(208,180,143,0.5)),
//                     url(${img4});
//     background-size: cover;
//     display: flex;
//     justify-content: center;
//     align-items: flex-end;
// `

const Wrapper = styled.div`
background-color: #2d2d2d;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
color: white;
height: 30vh;
`

const Text = styled.h4`
    color: white;
    margin:0 2rem;
`
const Input = styled.input`
background-color: transparent;
border-color: #d0b48f;
border:1px solid #d0b48f;
/* font-size: 1.3rem; */
padding: 0.8rem;
width: 20rem;
color:white;

`
const Button = styled.button`
    background-color: #d0b48f;
    border: none;
    padding: 0.9rem 1.5rem;
    margin: 1rem;
    &:hover{
        background-color: white;
        transition: 0.3s ease-in-out;
        color: #d0b48f;
    }

`


const Subscribe = () => {
  return (
    // <Container>
    <Wrapper>
        <Text>Stay Connected</Text>
        <Input type='email' placeholder='Email'/>
        <Button>Subscribe</Button>
    </Wrapper>
    // </Container>
  )
}

export default Subscribe
