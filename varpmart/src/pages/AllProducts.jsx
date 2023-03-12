import React from 'react'
import Products from '../components/Products'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'

const Parent = styled.div`
    /* background-color: #2d2d2d; */
    /* background:linear-gradient(90deg, rgba(174,144,118, 1) 0%, rgba(8, 12, 13, 1) 62%, rgba(0, 0, 0, 1) 100%); */
   overflow-x: hidden;
   background:linear-gradient(40deg, rgba(208, 180, 141, 1) 0%, rgba(8, 12, 13, 1) 62%, rgba(0, 0, 0, 1) 100%);
`
const Container = styled.div`
`

const Heading = styled.h2`
    margin: 5px 40px 0 40px;
    font-weight: 500;
`
const AllProducts = () => {
    return (
        <Parent>
            <Navbar />
            <Container style={{marginTop:'60px'}}>
                
                <Products />
            </Container>
            
            <Footer />
        </Parent>
    )
}

export default AllProducts
