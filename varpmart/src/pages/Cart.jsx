import axios, { all } from 'axios'
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom'

const Container = styled.div`
    padding: 20px;
`
const Header = styled.div`
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 20px 0;
    width: 100%;
`
const HeaderTitle = styled.h2`
    font-weight: 500;
    /* margin-bottom: 40px; */
    letter-spacing: 2px;
`
const HeaderButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    border: none;
    background-color: transparent;
    
`
const HeaderButton = styled.button`
    padding: 5px 10px;
    background-color: black;
    color: white;
    cursor: pointer;
`

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CartSection = styled.div`
    flex:0.7;
    padding: 10px;
    box-shadow: 0 4px 8px lightgray;
    background-color: white;
    border-radius: 5px;
    height: 85vh;
    overflow-y: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
        width: 2px;
        /* color: gray; */
    }

    &::-webkit-scrollbar-thumb {
        background: lightgray;
        /* border-radius: 10px; */
}

`

const Table = styled.table`
    background-color: white;
    /* border: 1px solid lightgray; */
    border-collapse: collapse;
    width: 100%;
    padding: 10px;
    border-spacing: 5px;
`

const TableHeading = styled.th`
    border: 1px solid lightgray;
    border-top: none;
    padding: 5px;
    font-weight: 500;
`

const TableRow = styled.tr`
 
`

const TableData = styled.td`
    border: 1px solid lightgray;
    text-align: center;
`

const ProductImage = styled.img`
    width: 100px;
`

const SummarySection = styled.div`
background-color: white;
flex:0.25;
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;
border-radius: 10px;

/* cursor: pointer; */
box-shadow: 0 4px 8px lightgray;

/* &:hover{
    box-shadow: 0 4px 8px lightgray;
} */
`

const SummaryHeading = styled.h2`
    text-align: center;
    font-weight: 500;
    margin-bottom: 40px;
    letter-spacing: 2px;
`

const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    border-bottom: 1px solid lightgray;
`

const SummaryItemName = styled.h3`
    font-weight: 300;
`

const SummaryItemPrice = styled.h3`
    font-weight: 400;
`

const CheckOutButton = styled.button`
    margin: 20px;
    padding: 10px;
    font-size: large;
    background-color: black;
    color: white;
    cursor: pointer;
`

const Cart = () => {


    let sub = 0;
    const [userid, setUserid] = React.useState('');

    // const [cartProductData,setCartProductData] = React.useState([]);
    let cartdata = [];



    React.useEffect(() => {

        setUserid(localStorage.getItem('userid'))

    }, [])

    const products = Object.keys(localStorage)

    for (let i = 0; i < products.length; i++) {
        products[i] !== 'userid' && cartdata.push(JSON.parse(localStorage.getItem(products[i])));

    }

    // console.log(cartdata)
    // console.log(userid)

    function EmptyCart() {

        for (let i = 0; i < products.length; i++) {
            products[i] !== 'userid' && localStorage.removeItem(products[i]);

        }
        window.location.reload(false);
    }

    function RemoveProduct(id) {
        localStorage.removeItem(id);
        window.location.reload(false);
    }

    for (let i = 0; i < cartdata.length; i++) {
        sub = sub + Number(cartdata[i].subtotal)
    }



    const putOrdersToDB = () => {

        const order = {
            userid: JSON.parse(userid),
            cartproducts: cartdata,
            totalprice: sub
        }
        
        try {
            axios.post("http://localhost:5000/order/addorder", order)
        } catch (err) {
            console.log(err)
        }
    }

    const updateDb =async ()=>{

        for(let i = 0 ; i < cartdata.length; i++){
            try{
                const olddata = await axios.get(`http://localhost:5000/product/${cartdata[i].id}`)
               
                const newdata = {
                    ...olddata,
                    quantity:Number(olddata.data.quantity)-Number(cartdata[i].quantity)
                }

                await axios.put(`http://localhost:5000/product/${cartdata[i].id}`,newdata)
            
            }catch(err){
                console.log(err)
            }
        }
    }
    function handleCheckout() {
        userid ?
            <>
                {cartdata.length < 1 ? alert('Cart is empty')
                :
                <>
                    {alert("Order has been placed!")}
                    {putOrdersToDB()}
                    {updateDb()}
                    {EmptyCart()}
                </>    
            }
            </>

            :
            <>
                {alert("Please login before placing order!")}
                {window.location.href = '/login'}
            </>

    }
    return (
        <>
            <Navbar />
            <Container style={{ marginTop: '60px' }}>
                <Header>
                    <HeaderTitle>Your Cart</HeaderTitle>
                    <HeaderButtons>
                        <HeaderButton><Link to='/products' style={{ textDecoration: 'none', color: 'white' }}>Continue Shopping</Link></HeaderButton>
                        <HeaderButton onClick={EmptyCart}>Clear Cart</HeaderButton>
                    </HeaderButtons>

                </Header>
                <Main>
                    <CartSection>
                        <Table>
                            <tbody>
                                <TableRow>
                                    <TableHeading style={{ borderLeft: 'none' }}>Product</TableHeading>
                                    <TableHeading>Name</TableHeading>
                                    <TableHeading>Price</TableHeading>
                                    <TableHeading>Quantity</TableHeading>
                                    <TableHeading>Subtotal</TableHeading>
                                    <TableHeading style={{ borderRight: 'none' }}>Remove</TableHeading>

                                </TableRow>

                                {cartdata.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableData style={{ borderLeft: 'none', padding: '10px 0px' }}><ProductImage src={product.img} /></TableData>
                                        <TableData>{product.name}</TableData>
                                        <TableData>{product.price}</TableData>
                                        <TableData>{product.quantity}</TableData>
                                        <TableData style={{ borderRight: 'none' }}>{product.subtotal}</TableData>
                                        <TableData><DeleteForeverIcon onClick={() => RemoveProduct(product.id)} style={{ cursor: 'pointer', color: 'red' }} /></TableData>
                                    </TableRow>
                                ))}


                            </tbody>
                        </Table>
                        {/* <ClearCart onClick={EmptyCart}>Clear Cart</ClearCart> */}
                    </CartSection>
                    <SummarySection>
                        <SummaryHeading>Summary</SummaryHeading>
                        <SummaryItem>
                            <SummaryItemName>Subtotal</SummaryItemName>
                            <SummaryItemPrice>{sub}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemName>GST</SummaryItemName>
                            <SummaryItemPrice>{sub * 0.18}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemName>Delievery Charges</SummaryItemName>
                            <SummaryItemPrice>{sub * 0.05}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemName style={{ fontWeight: '500' }}>Total</SummaryItemName>
                            <SummaryItemPrice style={{ fontWeight: '500' }}>{sub + sub * 0.18 + sub * 0.05}</SummaryItemPrice>
                        </SummaryItem>
                        <CheckOutButton onClick={handleCheckout}>Checkout</CheckOutButton>
                    </SummarySection>
                </Main>
            </Container>
            <Footer />
        </>
    )
}

export default Cart
