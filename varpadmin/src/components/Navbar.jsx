import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

import DashboardIcon from '@mui/icons-material/Dashboard';
// import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HeadsetIcon from '@mui/icons-material/Headset';

const Container = styled.div`
    background-color: white;
    height: 100vh;
    padding: 15px 0;
    position: fixed;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    /* background-color: yellow; */
    
`

const LogoSection = styled.div`
    display: flex;
    padding: 2px;
    border: 1px solid black;
    gap: 2px;
    width: fit-content;
    align-self: center;
    margin-top: 10px;
    /* background-color: blue; */
    
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
    background-color: #1d4bd1;
    /* text-shadow: 4px px #1d4bd1; */
    border-radius: 5px;
`





const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px 0px;
    align-items: flex-start;
    /* padding-left:20px; */
    /* background-color: yellow; */
    
`

const MenuItem =styled.div`
    /* background-color: skyblue; */
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    gap:10px;
    padding: 0 10px;
    font-weight: 500;
    transition: 0.2s all ease;
    color:'#909193';
    cursor: pointer;
    
    &:hover{
        color:#1d4bd1;
    }

`

const SubMenuItem = styled.div`
    font-size: 14px;
    color:gray;
    /* background-color: yellow; */
    &:hover{
        color:#1d4bd1 ;
    }
    
`

const navlinkstyle = ({isActive})=>{
    return{
            display:'flex',
            justifyContent:'center',
            // backgroundColor:'yellow',
            textDecoration:'none',
            border:'5px solid white',
            // borderTop:'none',
            // borderRight:'none',
            // borderBottom:'none',
            borderLeft: isActive ? '5px solid #1d4bd1':'5px solid white',
            paddingLeft:'25px',
            // backgroundColor:isActive ? '#1a90ff':'#00142a',
            color:isActive ? '#1d4bd1':'gray',
            margin: '5px 0px',
            padding: '5px 5px 5px 20px'
    }
}

function handlelogout(){
    localStorage.clear();
    window.location.reload(false);
}
const Navbar = () => {
  return (
    <Container>
        
        <SubLogo><HeadsetIcon style={{fontSize:'1.6rem',marginTop:'5px'}}/>Soundbeam</SubLogo>
        
        <MenuContainer>
            
            <NavLink to='/' style={navlinkstyle}>
            <DashboardIcon/><MenuItem > Dashboard</MenuItem>
            </NavLink>
            
            <NavLink to='/orders' style={navlinkstyle}>
                <InventoryOutlinedIcon/><MenuItem> Orders</MenuItem>
            </NavLink>
            
            <NavLink to='/products' style={navlinkstyle}>
            <CategoryOutlinedIcon/><MenuItem> Products
                <NavLink to='/products/addproduct' style={navlinkstyle}><SubMenuItem>+Add Product</SubMenuItem></NavLink>    
                </MenuItem>
            </NavLink>
            
            <NavLink to='/users' style={navlinkstyle}>
               <PeopleAltOutlinedIcon/> <MenuItem> Users</MenuItem>
            </NavLink>

            <NavLink to='/login' style={navlinkstyle} onClick={handlelogout}>
               <LogoutOutlinedIcon/> <MenuItem> Logout</MenuItem>
            </NavLink>
            

        </MenuContainer>
    </Container>
  )
}

export default Navbar