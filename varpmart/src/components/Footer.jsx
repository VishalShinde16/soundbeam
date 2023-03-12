import React from 'react'
import styled from 'styled-components'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import HeadsetIcon from '@mui/icons-material/Headset';



const Container = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    color: gray;
    background-color: #ececec;
    padding: 20px;
`

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h2`
    font-weight: 400;
    font-size: 1.7rem;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;

`
const SocialIcon = styled.div`
    width:30px;
    height:30px;
    border-radius: 50%;
    
    background-color:transparent;
    color:#d0b48f;

    /* color:#${props =>props.color}; */

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`


const Center = styled.div`
    flex:1;
    padding:25px;

 
`

const Title = styled.h4`
    margin-bottom: 30px;
    font-weight: 400;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex:1;
    padding: 25px;
    
    /* background-color: yellow; */

`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo><HeadsetIcon/> Soundbeam</Logo>
                <Desc>Lorem ipsum, am ratione doloribus vitae! Dolorum eos magni perferendis cumque quasi temporibus, molestias excepturi quae officiis vel aspernatur dolorem.</Desc>

                <SocialContainer>
                    <SocialIcon color='4267B2'>
                        <FacebookIcon />
                    </SocialIcon>

                    <SocialIcon color='E1306C'>
                        <InstagramIcon />
                    </SocialIcon>

                    <SocialIcon color='1DA1F2'>
                        <TwitterIcon />
                    </SocialIcon>

                    <SocialIcon color='E60023'>
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Help</ListItem>
                    <ListItem>Funds</ListItem>


                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <PlaceIcon style={{marginRight:'10px'}}/>A-303, Matunga, Mumbai.
                </ContactItem>
                <ContactItem>
                    <LocalPhoneIcon style={{marginRight:'10px'}}/>+91 9988234323
                </ContactItem>
                <ContactItem>
                    <MailOutlineIcon style={{marginRight:'10px'}}/>varpcompany@gmail.com
                </ContactItem>

            </Right>
        </Container>
    )
}

export default Footer