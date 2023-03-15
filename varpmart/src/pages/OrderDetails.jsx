
import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ParentContainer = styled.div`
    background-color: #2d2d2d;
`
const Container = styled.div`
  display: flex;
  padding: 20px;
  /* flex-direction: column; */
  height: 100vh;
  /* gap: 20px; */
  /* align-items: center; */
  justify-content: center;
  background-color: #2d2d2d;
`
// const Header = styled.div`
// width: 100%;
//   flex:0.1;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `
// const Status = styled.select`
// margin:5px;
// padding: 10px 15px;
// background-color: #1d4bd1;
// border-radius: 5px;
// border:none;
// color: white;
// cursor: pointer;
// `

const Main = styled.div`
flex:0.8;
margin-top: 10vh;
display: flex;
flex-direction: column;
  /* padding: 20px; */
  /* justify-content: space-between; */
  /* gap: 20px; */
  /* align-items: center; */
`
// const Userdata = styled.div`
//   flex:0.3;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: white;
//   padding: 30px 20px;
//   border-radius: 10px;

// /* cursor: pointer; */
// box-shadow: 0 4px 8px lightgray;
// `


// const Userprofile = styled.img`
//   width: 150px;
//   margin-top: 20px;
// `

// const Username = styled.h3``

// const Address = styled.p`
//   margin: 20px 20px;
// `
const Header = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#d0b48f;
    margin-bottom: 5vh;
`
const Orderdata = styled.div`
  flex:1;
  padding: 20px;
background-color: transparent;
border-radius: 10px;
min-height: 30vh;
max-height: 90vh;
overflow-y:scroll;
color:lightgray;
/* cursor: pointer; */
/* box-shadow: 0 4px 8px lightgray; */
`

const Table = styled.table`
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
    color:#d0b48f;
    font-weight: 500;
    text-align: center;
`

const TableRow = styled.tr`
 
`

const TableData = styled.td`
    border: 1px solid lightgray;
    text-align: center;
`

const ProductImage = styled.img`
    width: 50px;
`
const EditOrder = () => {

    const orderid = (window.location.pathname).split("/")[3]
    // console.log(orderid)


    const [orderdata, setOrderData] = React.useState({});

    // const [userData, setUserData] = React.useState({});

    const getOrderData = async () => {
        try {
            const order = await axios.get(`http://localhost:5000/order/${JSON.parse(localStorage.getItem('userid'))}/${orderid}`)
            setOrderData(order.data)


        } catch (err) {
            console.log(err)
        }
    }

    React.useEffect(() => {
        getOrderData();
    }, [])

    React.useEffect(() => {
        console.log(orderdata)
    }, [orderdata])

    // if (Object.keys(orderdata) > 0) {

    //   const getUserData = async () => {
    //     try {
    //       const user = await axios.get(`http://localhost:5000/user/${orderdata.userid}`)
    //       setUserData(user.data)


    //     } catch (err) {
    //       console.log(err)
    //     }
    //   }

    //   React.useEffect(() => {
    //     getUserData();
    //   }, [])

    // React.useEffect(() => {
    //   console.log(userData)
    // }, [userData])
    // }

    // async function handleStatus(event){
    //   const editstatus = {
    //     ...orderdata,
    //     status:event.target.value
    //   }

    //   try{
    //     await axios.put(`http://localhost:5000/order/${orderid}`,editstatus)
    //     window.location.reload(false)
    //   }catch(err){
    //     console.log(err)
    //   }


    // }

    return (
        <ParentContainer>
            <Navbar/>
            <Container>
                <Main>
                    <Header>
                    <h4 style={{fontWeight: '300'}}><b>Order Id:</b> {orderid}</h4>
                    <h4 style={{fontWeight: '300'}}><b>Total Price: </b><CurrencyRupeeIcon style={{color:'#d0b48f',height:'1.6rem'}}/>{orderdata.totalprice}</h4>
                    </Header>
                    <Orderdata>
                        <Table>
                            <tbody>
                                <TableRow>
                                    <TableHeading style={{ borderLeft: 'none' }}>Product</TableHeading>
                                    <TableHeading>Name</TableHeading>
                                    <TableHeading>Price</TableHeading>
                                    <TableHeading>Quantity</TableHeading>
                                    <TableHeading style={{ borderRight: 'none' }}>Subtotal</TableHeading>

                                </TableRow>



                                {Object.keys(orderdata).length > 0 ?
                                    orderdata.totalproducts.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableData style={{ borderLeft: 'none', padding: '10px 0px' }}><ProductImage src={product.img} /></TableData>
                                            <TableData>{product.name}</TableData>
                                            <TableData>{product.price}</TableData>
                                            <TableData>{product.quantity}</TableData>
                                            <TableData style={{ borderRight: 'none' }}>{product.subtotal}</TableData>
                                        </TableRow>
                                    ))
                                    :
                                    <></>
                                }

                            </tbody>
                        </Table>
                    </Orderdata>
                </Main>
            </Container>
            <Footer/>
        </ParentContainer>
    )
}

export default EditOrder
