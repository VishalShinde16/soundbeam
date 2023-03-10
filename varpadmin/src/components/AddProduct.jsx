import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), */
                    /* url("https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_960_720.png") center; */
    background-size: cover;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 40%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px gray;

  
`

const Title = styled.h1`
    font-weight: 400;
    font-size: 24px;
    margin: 10px 0;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 15px 0px;
    
`

const Input = styled.input`
    margin:0 50px 15px 0px;
    padding: 10px;
    font-size: 14px;
 
`



const Button = styled.button`
    width: 40%;
    padding: 10px;
    background-color: #1d4bd1;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
`
const AddProduct = () => {

    const [productData, setproductData] = React.useState(
        {
            imgurl: '',
            productname: '',
            type: [],
            price: '',
            quantity: ''
        }
    );

    function handleChange(event) {
        setproductData(
            {
                ...productData,
                [event.target.name]: event.target.value
            }
        )
    }

    async function addproduct() {

        if (productData.imgurl && productData.productname && productData.type && productData.price && productData.quantity) {

            try {

                const res = await axios.post("http://localhost:5000/product/addproduct", productData)
                alert(res)
            } catch (err) {
                alert(err)
            }

        }
        else {
            alert('Please fill all the fields')
        }


    }

    return (
        <Container>
            <Wrapper>
                <Title>Add Product</Title>
                <Form>
                    <Input placeholder='Product Img' name='imgurl' value={productData.imgurl} onChange={handleChange} />
                    <Input placeholder='Product Name' name='productname' value={productData.productname} onChange={handleChange} />
                    <Input placeholder='Type' name='type' value={productData.type} onChange={handleChange} />
                    <Input placeholder='Price' name='price' value={productData.price} onChange={handleChange} />
                    <Input placeholder='Quantity' name='quantity' value={productData.quantity} onChange={handleChange} />
                    
                </Form>

                <Button onClick={addproduct}>Add</Button>
            </Wrapper>
        </Container>
    )
}

export default AddProduct
