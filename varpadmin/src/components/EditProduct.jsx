import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
                    url('https://img.freepik.com/premium-photo/model-being-covered-by-shopping-bags-copy-space_23-2148674119.jpg?w=2000') center;
    background-size: cover;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 40%;
    background-color: white;

  
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

const Aggrement = styled.span`
    font-size: 14px;
    margin: 10px 0px;


`

const Button = styled.button`
    width: 40%;
    padding: 10px;
    background-color: teal;
    border: none;
    color: white;
    cursor: pointer;
`
const EditProduct = () => {

    const proId = (window.location.pathname).split('/')[3]
    // console.log(proId)

    // const [product, setProduct] = React.useState([]);
    
    const [productData, setproductData] = React.useState(
        {
            imgurl: '',
            productname: '',
            type: [],
            price: '',
            quantity: ''
        }
    );

    const getProduct = async () => {
        try {
          const Productdata = await axios.get(`http://localhost:5000/product/${proId}`)
          setproductData(Productdata.data)
        } catch (err) {
          console.log(err)
        }
      }
    
      React.useEffect(() => {
        getProduct();
      }, [])
    
      React.useEffect(() => {
        console.log(productData)
      }, [productData])


    function handleChange(event) {
        setproductData(
            {
                ...productData,
                [event.target.name]: event.target.value
            }
        )
    }

    async function saveproduct() {

        if (productData.imgurl && productData.productname && productData.type && productData.price && productData.quantity) {

            try {

                const res = await axios.put(`http://localhost:5000/product/${proId}`, productData)
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
                <Title>Edit Product</Title>
                <Form>
                    <Input placeholder='Product Img' name='imgurl' value={productData.imgurl} onChange={handleChange} />
                    <Input placeholder='Product Name' name='productname' value={productData.productname} onChange={handleChange} />
                    <Input placeholder='Type' name='type' value={productData.type} onChange={handleChange} />
                    <Input placeholder='Price' name='price' value={productData.price} onChange={handleChange} />
                    <Input placeholder='Quantity' name='quantity' value={productData.quantity} onChange={handleChange} />
                    
                </Form>

                <Button onClick={saveproduct}>Save</Button>
            </Wrapper>
        </Container>
    )
  
}

export default EditProduct
