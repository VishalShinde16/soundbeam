import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ParentContainer = styled.div`
  background-color: #2d2d2d;
  
`
const Container = styled.div`
  /* background-color: yellow; */
  height: 100vh;
  padding: 20px;
  margin: 15px;
`
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`
const Heading = styled.h3`
  font-weight: 300;
  color: #d0b48f;
  /* margin-bottom: 20px; */
`

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
  background-color: transparent;
  /* box-shadow: 0 4px 8px lightgray; */
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
  color:#d0b48f;
  text-align: center;
`

const TableRow = styled.tr``

const TableData = styled.td`
font-size: 12px;
  border: 1px solid lightgray;
  border-collapse:collapse;
  padding: 5px 5px;
  color:lightgray;
  text-align: center;
`

const Button = styled.button`
  padding: 2px 5px;
  margin: 0 5px;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
`




const MyOrders = () => {


  const userid = (window.location.pathname).split('/')[2];
  console.log(userid)
  
  const [allOrders, setAllOrders] = React.useState([]);
  const getOrders = async () => {
    try {
      const Ordersdata = await axios.get(`http://localhost:5000/order/${userid}/allorders`)
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

  
  return (
    <ParentContainer>

      <Navbar/>
    <Container>
      <TopContainer>
        <Heading>My Orders</Heading>
      </TopContainer>

      <TableContainer>

        <Table id='allOrderstable'>
          <tbody>

            <TableRow>
              <TableHeading style={{borderLeft:'none'}}>Order Id</TableHeading>
              {/* <TableHeading>User Id</TableHeading> */}
              <TableHeading>Ordered Date</TableHeading>
              <TableHeading>Total Products</TableHeading>
              <TableHeading>Total Price</TableHeading>
              <TableHeading>Status</TableHeading>
              <TableHeading style={{borderRight:'none'}}>View</TableHeading>

            </TableRow>

            {allOrders.length > 0 &&

              allOrders.map(({ _id,createdAt,totalproducts,totalprice,status }, index) => (

                <TableRow key={_id}>


                  <TableData style={{borderLeft:'none'}}>{_id}</TableData>
                  {/* <TableData>{userid}</TableData> */}
                  <TableData>{createdAt.replace("T"," ")}</TableData>
                  <TableData>{totalproducts.length}</TableData>
                  <TableData><CurrencyRupeeIcon style={{color:'lightgray',height:'1rem'}}/>{totalprice}</TableData>
                  <TableData >{status}</TableData>

                  <TableData style={{borderRight:'none'}}>
                    <Link to={`/orders/${JSON.parse(localStorage.getItem('userid'))}/${_id}`}>
                    <Button><VisibilityOutlinedIcon/></Button>
                    </Link>
                    {/* <Button onClick={() => deleteorder(_id)}><DeleteForeverOutlinedIcon/></Button> */}
                  </TableData>

                </TableRow>
              ))
              
            }

          </tbody>
        </Table>
      </TableContainer>
    </Container>
      <Footer/>
    </ParentContainer>
  )
}

export default MyOrders
