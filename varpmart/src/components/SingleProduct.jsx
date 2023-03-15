import React from 'react'
import styled from 'styled-components'

//icons
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
// import styleFunctionSx from '@mui/system/styleFunctionSx';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* padding: 10px 10px; */
    margin: 20px ;
    width:15% ;
    height: 280px;
    overflow: hidden;
    border-radius: 5px;
    /* background-color: #2a2a2a; */
    background-color: transparent;
   
    cursor: pointer;
    &:hover{    
        box-shadow: 0px 4px 8px black;
    }
`

const ImageSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid lightgray; */
    padding: 20px 0;
    
`

const Img = styled.img`
    height: 100%;
    width: 120px;
`
const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-top: 10px; */
    padding: 5px 20px;
    color:white;
    /* background-color: yellow; */
`

const ProductName = styled.h3`
    font-weight: 400;
    font-size: 1.2rem;
`
const Price = styled.h2`
    margin: 5px 0px;
    font-weight: 300;
    font-size: medium;
    display: flex;
    color:#d0b48f;
    align-items: center;
`

const SingleProduct = (props) => {
    return (
        <Container>
                <Link to={`/products/${props.product._id}`} style={{textDecoration:'none',color:'black'}}>
                <ImageSection>
                    <Img src={props.product.imgurl} />
                </ImageSection>
                <InfoSection>
                    <ProductName>{props.product.productname}</ProductName>
                    <Price><CurrencyRupeeIcon style={{fontSize:'medium'}}/>{props.product.price}</Price>
                    {props.product.quantity < 10 && props.product.quantity > -1 ? <p style={{fontSize:'smaller'}}>{`Only ${props.product.quantity} left in stock`}</p>:<></>}
                </InfoSection>
                </Link>
        </Container>
    )
}

export default SingleProduct