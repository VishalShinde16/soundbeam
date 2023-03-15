import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import bg1 from '../images/bg3.jpg'
import aim from '../images/aim.png'
import about from '../images/about.jpg'

const Container = styled.div`
    background-color: #2d2d2d;
    background:linear-gradient(34deg, rgba(208, 180, 143, 1) 0%, rgba(0, 0, 0, 1) 71%);
`

const Main = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    
`

const Top = styled.div`
    display: flex;
`
const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 10rem;
`

const Img = styled.img`
    width: 40vw;
    height: 50vh;
    margin: 2rem 3rem;
    border-radius: 5px;
    
`

const Content = styled.div`
    /* flex:0.5; */
    margin: 2rem;
    color:lightgray;
    /* flex:0.5; */
`

const Title = styled.h2`
    color: #d0b48f;
`

const Info = styled.p`
    
`
const About = () => {
  return (
    <Container>
      <Navbar/>
      <Main>
        <Top>

        <Img src={about} />
        <Content>
            <Title>Who are we?</Title>
            <Info>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae nulla, qui sapiente delectus cumque porro non quibusdam tempora labore enim dolorum dignissimos cum ex inventore iure quia maxime eligendi at, adipisci placeat nobis fugit. Rem ducimus aspernatur ipsum. Voluptatum!
                </Info>
            <Info>
                Amet consectetur adipisicing elit. Iure praesentium distinctio sint suscipit voluptatibus harum, laborum impedit? Repudiandae minima nam reprehenderit eum totam. Maxime rerum harum ab itaque, distinctio temporibus mollitia doloribus placeat accusamus consequuntur beatae sed quia et totam veniam nulla quis officia repellat dignissimos ipsa tempora eveniet possimus voluptas in! Nulla, inventore. Amet impedit expedita inventore vitae fugit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, neque.
            </Info>
        </Content>
        </Top>
        <Bottom>    
            <Title>The aim of this journey ?</Title>
            <p style={{color:'white'}}>Self discovery Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ullam eum omnis quae perspiciatis unde. Modi dolorum, pariatur labore doloremque, ex at eos deserunt est, unde qui molestias fugit porro! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, facilis! Aut aliquid ea aspernatur quaerat ex eum facilis reiciendis dignissimos saepe odit illo, assumenda recusandae deserunt cumque! Rem, nesciunt fuga!</p>
        </Bottom>
      </Main>

      {/* <img src={aim}/> */}
      <Footer/>
    </Container>
  )
}

export default About
