import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Container = styled.div`
  /* background-color: yellow; */
  height: 100vh;
  padding: 20px;
  margin-top: 15px;
`
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`
const Heading = styled.h2`
  font-weight: 400;
  /* margin-bottom: 20px; */
`

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
  background-color: white;
  box-shadow: 0 4px 8px lightgray;
  padding: 20px;
`

const Table = styled.table`
  /* border: 1px solid lightgray; */
  border-collapse: collapse;
  width: 100%;
`

const TableHeading = styled.th`
  border: 1px solid lightgray;
  border-top: none;
  border-collapse:collapse;
  padding: 5px 30px;
  font-weight: 500;
`

const TableRow = styled.tr``

const TableData = styled.td`
font-size: 12px;
  border: 1px solid lightgray;
  border-collapse:collapse;
  padding: 5px 5px;
  text-align: center;
`

const Button = styled.button`
  padding: 2px 5px;
  margin: 0 5px;
  border: none;
  background-color: white;
  cursor: pointer;
`




const Orders = () => {



  const [allOrders, setAllOrders] = React.useState([]);
  const getOrders = async () => {
    try {
      const Ordersdata = await axios.get("http://localhost:5000/order/")
      setAllOrders(Ordersdata.data.reverse())
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    getOrders();
  }, [])

  React.useEffect(() => {
    // console.log(allOrders)
  }, [allOrders])

  function deleteorder(id, index) {
    try {
      axios.delete(`http://localhost:5000/order/${id}`)
      // Table.deleteRow(index+1)
      // document.getElementById('allOrderstable').removeRow(index+1)
      window.location.reload(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <TopContainer>
        <Heading>All Orders</Heading>
        {/* <Link to='/Orders/addproduct'>
        <AddProduct>Add Product</AddProduct>
        </Link> */}
      </TopContainer>

      <TableContainer>

        <Table id='allOrderstable'>
          <tbody>

            <TableRow>
              <TableHeading style={{borderLeft:'none'}}>Order Id</TableHeading>
              <TableHeading>User Id</TableHeading>
              <TableHeading>Created Date</TableHeading>
              <TableHeading>Total Products</TableHeading>
              <TableHeading>Total Price</TableHeading>
              <TableHeading>Status</TableHeading>
              <TableHeading style={{borderRight:'none'}}>Action</TableHeading>

            </TableRow>

            {allOrders.length > 0 &&

              allOrders.map(({ _id,userid,createdAt,totalproducts,totalprice,status }, index) => (
                
                <TableRow key={_id}>
                  

                  <TableData style={{borderLeft:'none'}}>{_id}</TableData>
                  <TableData>{userid}</TableData>
                  <TableData>{createdAt.replace("T"," ")}</TableData>
                  <TableData>{totalproducts.reduce((acc, product) => acc + product.quantity, 0)}</TableData>
                  <TableData>{totalprice}</TableData>
                  <TableData >{status}</TableData>

                  <TableData style={{borderRight:'none'}}>
                    <Link to={`/orders/${_id}`}>
                    <Button><ModeEditOutlineOutlinedIcon/></Button>
                    </Link>
                    <Button onClick={() => deleteorder(_id)}><DeleteForeverOutlinedIcon/></Button>
                  </TableData>

                </TableRow>
              ))

            }

          </tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Orders
