import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'

import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.png'
import img4 from '../images/4.jpg'

import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import EarbudsOutlinedIcon from '@mui/icons-material/EarbudsOutlined';
import b1 from '../images/f1.png'
import b2 from '../images/f2.png'
import b3 from '../images/f3.png'
import b4 from '../images/f4.png'
import b5 from '../images/f5.png'
import Review from '../components/Review'
import Subscribe from '../components/Subscribe'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`

const FirstContainer = styled.div`
  background-image:url(${img1}) ;
  background-repeat:no-repeat;
   background-size:cover;
  height: 100vh;
  /* overflow: hidden; */
  width: 100vw;
  display: flex;
  /* justify-content: center; */
  align-items:center ;
  /* padding-top: 15vh; */
  flex-direction: column;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  flex: 0.6;
  gap: 20px;
  align-items: flex-start;
  margin: 30vh 30vw 20vh 15vw;
  
`

const TitleButton = styled.button`
  background-color: transparent;
  border: 0.5px solid white;
  font-weight: 100;
  color: white;
  width: 25%;
  padding: 15px 10px;
  margin: 40px 0;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 1.5px;
  &:hover{
    background-color: white;
    color: #6c594a;
    transition: 0.5s ease-in-out;
  }
`



const SecondContainer = styled.div`

background-image: url(${img2});
background-repeat: no-repeat;
background-size: cover;
height: 105vh;
/* background-position-y: ${props => props.offset + 'px'}; */


`



const Foreground = styled.div`

  display: flex;
  /* height: 100vh; */
  height: 100%;
`

const Feature = styled.div`
  flex: 0.25;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  color: white;
  padding:13% 5% 3% 5%;
  font-size: 1.2rem;
  gap:1.2rem;
  margin: 0 1px;
  /* border-right: 1px solid transparent; */
  background-color: rgba(0,0,0,.5);
`
const Feature2 = styled.div`
  flex: 0.25;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  color: white;
  padding:3% 5% 13% 5%;
  font-size: 1.2rem;
  gap:1.2rem;
  margin: 0 1px;
  /* border-right: 1px solid transparent; */
  background-color: rgba(0,0,0,.5);
`
const Featurename = styled.h4`
  font-weight: 400;
`

const Featuretext = styled.p`
  font-weight: 200;
  color:gray;
  margin: 1rem 0;
`

const ThirdContainer = styled.div`
  /* background-color: blue; */
  height: 60vh;
  display: flex;
  flex-wrap: wrap;
  background-color: #ececec;
`

const Brand = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Brandlogo = styled.img`
  opacity:0.2;
  &:hover{
    opacity:1;
  }
`

const FourthContainer = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
  background-color: #e3cbaa;
`

const ImageSection = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: center;
  align-items: center;
`
const InfoSection = styled.div`
  display: flex;
  flex: 0.5;
  padding-top: 2rem;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  color:white;
  /* background-color: aqua; */
  

`

const SubscribeContainer = styled.div`
    height: 100vh;
    background-image:url(${img4});
    background-repeat: no-repeat;
    background: linear-gradient(rgba(208,180,143,0.5),rgba(208,180,143,0.5)),
                    url(${img4});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

const Home = () => {

  let offset = 1;

  window.addEventListener("scroll", function () {
    let yoffset = window.pageYOffset;
    offset = 0.7 * yoffset;

    document.getElementById('second').style.backgroundPositionY = offset;
    console.log(offset)
    // document.getElementById('second').style.display = offset > 500 ? 'none': 'block';
    // console.log('inside'+yoffset)
  })

  // function demo(){
  //   document.getElementById('first').style.backgroundColor = 'yellow'

  // }

  // console.log('outside'+offset)

  return (
    <Container>
      <FirstContainer id='first'>
        <Navbar />
        <TitleContainer>
          <span>Soundbeam ERD -3083</span>
          <span style={{ fontSize: '70px', letterSpacing: '5px', fontWeight: '400', lineHeight: '80px' }}>Reinventing <br />Sound Experience</span>
          <TitleButton onClick={()=>window.location.href='/products'}>Order Now</TitleButton>
        </TitleContainer>
      </FirstContainer>

      <SecondContainer id='second'>
        {/* <Header> */}
        {/* <Background src={img2} /> */}
        <Foreground>

          <Feature>
            <GraphicEqIcon style={{ fontSize: '2.5rem' }} />
            <Featurename>High Quality Sound</Featurename>
            <Featuretext>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere sed doloremque culpa maxime.</Featuretext>
          </Feature>

          <Feature2>
            <BluetoothIcon style={{ fontSize: '2.5rem' }} />
            <Featurename>Easy Wireless Listening</Featurename>
            <Featuretext>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere sed doloremque culpa maxime.</Featuretext>
          </Feature2>
          <Feature>
            <BoltOutlinedIcon style={{ fontSize: '2.5rem' }} />
            <Featurename>Longer Battery Life</Featurename>
            <Featuretext>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere sed doloremque culpa maxime.</Featuretext>
          </Feature>
          <Feature2>
            <EarbudsOutlinedIcon style={{ fontSize: '2.5rem' }} />
            <Featurename>Sleek Updated Design</Featurename>
            <Featuretext>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere sed doloremque culpa maxime.</Featuretext>
          </Feature2>

        </Foreground>
        {/* </Header> */}


      </SecondContainer>

      <ThirdContainer>
        <Brand>
          <h3 style={{ color: 'gray', fontWeight: '400', letterSpacing: '1px' }}>As Featured On :</h3>
        </Brand>
        <Brand>
          <Brandlogo src={b1} />
        </Brand>
        <Brand>
          <Brandlogo src={b2} />
        </Brand>
        <Brand>
          <Brandlogo src={b3} />
        </Brand>
        <Brand>
          <Brandlogo src={b4} />
        </Brand>
        <Brand>
          <Brandlogo src={b5} />
        </Brand>
      </ThirdContainer>

      <FourthContainer>
        <ImageSection>
          <img src={img3}/>
        </ImageSection>
        <InfoSection>
          <span style={{ fontSize: '3rem', letterSpacing: '2px', fontWeight: '500', lineHeight: '3rem' }}>Music Like You've <br/> Never Heard Before</span>
          <span style={{margin:'1rem 5rem 1rem 0',fontWeight:'200'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad, incidunt veniam cupiditate ut assumenda?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, repellat.</span>
          <TitleButton onClick={()=>window.location.href='/products'}>Order Now</TitleButton>
        </InfoSection>
      </FourthContainer>

      <Review/>
      
      <SubscribeContainer>
        <Subscribe/>
      </SubscribeContainer>
      <Footer/>
    </Container>


  )
}

export default Home