import React from 'react'
import Products from '../components/Products'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Container = styled.div`
    background-color: #f3f2f2e0;
`
const Heading = styled.h2`
    margin: 5px 40px 0 40px;
    font-weight: 500;
`
const AllProducts = () => {
    return (
        <>
            <Navbar />
            <Container style={{marginTop:'60px'}}>
                <Heading>All Products</Heading>
                <Products />
            </Container>
            <Footer />
        </>
    )
}

export default AllProducts
