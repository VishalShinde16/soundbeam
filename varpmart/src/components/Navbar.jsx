import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HeadsetIcon from '@mui/icons-material/Headset';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
    background-color: transparent;
    /* box-shadow: 0 2px 4px lightgray; */
    /* position: fixed; */
    top:0;
    width: 100vw;
    color: white;
    border-bottom: 1px solid white;
    
`

const LogoSection = styled.div`
    display: flex;
    padding: 4px;
    font-size: 1.5rem;
    gap: 1.5rem;
    align-items: center;
    /* background-color: blue; */
    /* background-color: black; */
`

const SubLogo = styled.div`
    display: flex;
align-items: center;
color: white;
font-size: 1.7rem;
font-weight: 400;
    padding: 3px 6px;
    margin-bottom: 4px;
    gap:5px;
`

const ContactSection = styled.div`
    display: flex;
    /* justify-content: space-between; */
    /* flex: 0.4; */
    align-items: center;
    color:#d3b795;
`

const MenuItem = styled.div`
    color: white;
    padding: 3px 6px;
    letter-spacing: 1px;
    font-weight: 300;
    font-size: 1rem;
    &:hover{
        /* background-color: black; */
        color:transparent ;
        color: #d3b795;
    }
`
const Navbar = () => {
    
    function signout(){
        localStorage.clear()
        window.location.reload(false);
    }
  return (
    <Container>
        <LogoSection>
        <Link style={{textDecoration: 'none'}} to={'/'}><MenuItem><SubLogo><HeadsetIcon/>Soundbeam</SubLogo></MenuItem></Link>
            <Link style={{textDecoration: 'none'}} to={'/'}><MenuItem>Home</MenuItem></Link>
            <Link style={{textDecoration: 'none'}} to={'/products'}><MenuItem>Products</MenuItem></Link>
            <Link style={{textDecoration: 'none'}} to={'/'}><MenuItem>About</MenuItem></Link>
            {localStorage.getItem('userid') && <Link style={{textDecoration: 'none'}} to={`/orders/${JSON.parse(localStorage.getItem('userid'))}`}><MenuItem>My Orders</MenuItem></Link>}
        </LogoSection>
        <ContactSection>
            
            {localStorage.getItem('userid') ? <Link style={{textDecoration: 'none'}} to={'/'}><MenuItem onClick={signout} style={{color:'#d3b795'}}>Sign-Out</MenuItem></Link>:<Link style={{textDecoration: 'none'}} to={'/login'}><MenuItem>Sign-In</MenuItem></Link> }
            <Link style={{textDecoration: 'none'}} to={'/cart'}><MenuItem>
            <Badge badgeContent={localStorage.getItem('userid') && Object.keys(localStorage).length > 0 ? Object.keys(localStorage).length-1:Object.keys(localStorage).length} color="secondary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
            </MenuItem></Link>

        </ContactSection>
    </Container>
  )
}

export default Navbar
