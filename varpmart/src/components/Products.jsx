import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import SingleProduct from './SingleProduct'
import Subscribe from './Subscribe'

const ParentContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
`

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
`

const SearchSection = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
/* margin: 10px; */
color:#d0b48f;
padding: 0 20px;
`

const Search = styled.input`
    padding: 5px 10px;
    background-color: transparent;
    border: 1px solid #d0b48f;
    color: lightgray;
`
const Products = () => {

    const [searchtext, setSearchtext] = React.useState('');

    const [products, setProducts] = React.useState([]);
    //   const [filteredProducts,setFilteredProducts] = React.useState([]);

    const getProducts = async () => {

        try {
            const res = await axios.get("http://localhost:5000/product/")

            const filteredProducts = res.data.filter((product)=>product.productname.toLowerCase().includes(searchtext.toLowerCase()))
            setProducts(filteredProducts)
            // console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    React.useEffect(() => {
        getProducts();
    }, [searchtext])

    function handleSearch(event){
        setSearchtext(event.target.value)
    }

    return (
        <ParentContainer>
            <SearchSection>
                <h3 style={{fontWeight:'400',marginLeft:'5rem'}}>All Products</h3>
                <Search placeholder='search' value={searchtext} onChange={handleSearch}/>
            </SearchSection>

            <Container>

                {products.length > 0 && products.map(product => (
                    <SingleProduct product={product} key={product._id} />
                ))}

            </Container>
            <Subscribe/>
        </ParentContainer>
    )
}

export default Products