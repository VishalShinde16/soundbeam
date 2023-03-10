import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  height: 100vh;
  /* gap: 20px; */
  align-items: center;
`
const Header = styled.div`
width: 100%;
  flex:0.1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Status = styled.select`
margin:5px;
padding: 10px 15px;
background-color: #1d4bd1;
border-radius: 5px;
border:none;
color: white;
cursor: pointer;
`

const Main = styled.div`
flex:0.8;
display: flex;
  /* padding: 20px; */
  justify-content: space-between;
  /* gap: 20px; */
  align-items: center;
`
const Userdata = styled.div`
  flex:0.3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 30px 20px;
  border-radius: 10px;

/* cursor: pointer; */
box-shadow: 0 4px 8px lightgray;
`


const Userprofile = styled.img`
  width: 150px;
  margin-top: 20px;
`

const Username = styled.h3``

const Address = styled.p`
  margin: 20px 20px;
`

const Orderdata = styled.div`
  flex:0.6;
  padding: 20px;
background-color: white;
border-radius: 10px;
height: 70vh;
overflow-y:scroll;

/* cursor: pointer; */
box-shadow: 0 4px 8px lightgray;
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
    font-weight: 500;
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

  const orderid = (window.location.pathname).split("/")[2]
  // console.log(orderid)


  const [orderdata, setOrderData] = React.useState({});

  // const [userData, setUserData] = React.useState({});

  const getOrderData = async () => {
    try {
      const order = await axios.get(`http://localhost:5000/order/${orderid}`)
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

async function handleStatus(event){
  const editstatus = {
    ...orderdata,
    status:event.target.value
  }

  try{
    await axios.put(`http://localhost:5000/order/${orderid}`,editstatus)
    window.location.reload(false)
  }catch(err){
    console.log(err)
  }


}

return (
  <Container>
    <Header>
      <h2 style={{fontWeight:'400'}}>Order Id : {orderdata._id}</h2>
      <span style={{display:'flex',alignItems:'center'}}><Status value={orderdata.status} onChange={handleStatus}>
        <option value='Pending'>Pending</option>
        <option value = 'Shipped'>Shipped</option>
        <option value = 'Delivered'>Delivered</option>
      </Status></span>
    </Header>
    <Main>

    <Userdata>
      <h4 style={{fontWeight:'400'}}>User Id : {orderdata.userid}</h4>
      <Userprofile src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg' alt='user' />
      <Username>{'Vishal' + ' ' + 'Shinde'}</Username>
      <Address><b>Address:</b> <br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, officiis.</Address>
    </Userdata>

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

          {/* { orderdata.totalproducts.map((product) => (
            <TableRow key={product.id}>
            <TableData style={{ borderLeft: 'none', padding: '10px 0px' }}><ProductImage src={product.img} /></TableData>
            <TableData>{product.name}</TableData>
            <TableData>{product.price}</TableData>
            <TableData>{product.quantity}</TableData>
            <TableData style={{ borderRight: 'none' }}>{product.subtotal}</TableData>
            </TableRow>
          ))} */}

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
)
}

export default EditOrder
