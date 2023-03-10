import React from 'react'
import styled from 'styled-components'

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Container = styled.div`
    min-height: 85vh;
`

const Wrapper = styled.div`
    display: flex;
    padding: 50px;

`
const ImgContainer = styled.div`
    flex:1;

`
const Image = styled.img`
    height: 75vh;
    width: 80%;
    object-fit: cover;


`
const InfoContainer = styled.div`
    flex:1;
`

const Title = styled.h1`
    font-weight: 400;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.h1`
    font-weight: 100;
    font-size: 40px;
    margin: 40px 0 20px 0 ;
`



const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid teal;
    border-radius: 10px;
    font-weight: 700;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    padding: 10px 10px;
    border:2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;

    transition: all 0.3s ease;
    &:hover{
        background-color: teal;
        color: white;
    }
`

const ProductDetails = () => {

    const proId = (window.location.pathname).split('/')[2];
    const [productInfo, setProductInfo] = React.useState({});
    const [quantity, setQuantity] = React.useState(1);

    const getProduct = async () => {

        try {
            const productData = await axios.get(`http://localhost:5000/product/${proId}`)
            console.log(productData)
            setProductInfo(productData)
        } catch (err) {
            console.log(err)
        }
    }

    React.useEffect(() => {
        getProduct()
    }, [])

    function handleCart(productId, quantity) {

        if (quantity > 0) {

            const product = JSON.parse(window.localStorage.getItem(`${productId}`))
            console.log(product)
            const newquantity = product ? Number(product.quantity) + Number(quantity) : Number(quantity)
            // const products = {
            //     productid:productId,
            //     quantity:quantity
            // }

            const products = {
                id: productId,
                img: productInfo.data.imgurl,
                name: productInfo.data.productname,
                type: productInfo.data.type,
                price: productInfo.data.price,
                quantity: newquantity,
                subtotal: Number(productInfo.data.price) * newquantity
            }

            window.localStorage.setItem(`${productId}`, JSON.stringify(products))
            alert(`${productInfo.data.productname} added to cart!`)
            window.location.reload(false);
        }
        else {
            alert("Please select quantity")
        }
    }
    return (
        <>

            <Navbar />
            <Container style={{ marginTop: '60px' }}>
                {Object.keys(productInfo).length > 0 ?
                    <Wrapper>
                        <ImgContainer>
                            <Image src={productInfo.data.imgurl} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{productInfo.data.productname}</Title>
                            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae eum perspiciatis eius illum accusamus quis qui laudantium soluta temporibus iusto!
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam asperiores ad expedita amet facilis quae, eos provident facere, neque ut sunt deserunt assumenda dicta perferendis est perspiciatis quos aut! Nobis dignissimos natus placeat non obcaecati consectetur? Tempore, nisi ducimus mollitia quas, suscipit expedita unde eligendi quasi magnam dolorem, debitis dicta?
                            </Desc>
                            <Price><CurrencyRupeeIcon />{productInfo.data.price}</Price>

                            <AddContainer>
                                <AmountContainer>
                                    <span onClick={() => setQuantity((oldvalue) => oldvalue > 0 ? oldvalue - 1 : 0)}><RemoveIcon /></span>
                                    <Amount>{quantity}</Amount>
                                    <span onClick={() => setQuantity((oldvalue) => oldvalue < productInfo.data.quantity ? oldvalue + 1 : oldvalue)}><AddIcon /></span>
                                </AmountContainer>

                                <Button onClick={() => handleCart(productInfo.data._id, quantity)}>ADD TO CART</Button>
                            </AddContainer>
                        </InfoContainer>
                    </Wrapper>
                    :
                    <></>
                }
                <Footer />
            </Container>
        </>
    )
}

export default ProductDetails