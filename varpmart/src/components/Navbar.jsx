import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
    background-color: white;
    box-shadow: 0 2px 4px lightgray;
    position: fixed;
    top:0;
    width: 100vw;
`

const LogoSection = styled.div`
    display: flex;
    padding: 2px;
    border: 1px solid black;
    gap: 2px;
`

const SubLogo = styled.div`
    border: 1px solid black;
    padding: 3px 6px;
`

const MenuSection = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 0.4;
`

const MenuItem = styled.div`
    color: black;
    padding: 3px 6px;
    /* border-radius:20px; */
    letter-spacing: 1px;
    font-weight: 400;
    &:hover{
        /* background-color: black; */
        text-decoration: underline;
        /* color: white; */
    }
`
const Navbar = () => {
    
  return (
    <Container>
        <LogoSection>
            <SubLogo style={{backgroundColor:'black',color:'white'}}>VARP</SubLogo>
            <SubLogo>MART</SubLogo>
        </LogoSection>
        <MenuSection>
            <Link style={{textDecoration: 'none'}} to={'/'}><MenuItem>Home</MenuItem></Link>
            <Link style={{textDecoration: 'none'}} to={'/products'}><MenuItem>Products</MenuItem></Link>
            <Link style={{textDecoration: 'none'}} to={'/'}><MenuItem>About</MenuItem></Link>
            <Link style={{textDecoration: 'none'}} to={'/'}><MenuItem>Contact</MenuItem></Link>
            {localStorage.getItem('userid') ? <Link style={{textDecoration: 'none'}} to={'/'}><MenuItem onClick={()=>localStorage.clear()}>Sign-Out</MenuItem></Link>:<Link style={{textDecoration: 'none'}} to={'/login'}><MenuItem>Sign-In</MenuItem></Link> }
            <Link style={{textDecoration: 'none'}} to={'/cart'}><MenuItem>
            <Badge badgeContent={localStorage.getItem('userid') && Object.keys(localStorage).length > 0 ? Object.keys(localStorage).length-1:Object.keys(localStorage).length} color="secondary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
            </MenuItem></Link>

        </MenuSection>
    </Container>
  )
}

export default Navbar
