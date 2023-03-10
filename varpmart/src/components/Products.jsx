import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import SingleProduct from './SingleProduct'

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
`
const Products = () => {


    const [products, setProducts] = React.useState([]);
    //   const [filteredProducts,setFilteredProducts] = React.useState([]);

    const getProducts = async () => {

        try {
            const res = await axios.get("http://localhost:5000/product/")
            setProducts(res.data)
            // console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    React.useEffect(() => {
        // axios.get("https://localhost:5000/api/product/")

        getProducts();
    }, [])

    return (
        <Container>

            {products.length > 0 && products.map(product => (
                <SingleProduct product={product} key={product._id} />
            ))}

        </Container>
    )
}

export default Products