import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import millify from 'millify'
import { PieChart } from 'react-minimal-pie-chart';

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const Container = styled.div``

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`

const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
`

const Card = styled.div`
  display: flex;
  justify-content: center;
  gap:10px;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 3px 6px gray;
  padding: 2rem;
`
const CardIcon = styled.div`
  background-color: #dee2ff;
  padding: 1rem;
  border-radius: 50%;
  color: #1d4bd1;
`

const CardInfo = styled.div`
  text-align: center;
`

const InfoNumber = styled.h2``
const InfoText = styled.p``

const PieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0.35;
`

const Labels = styled.div`
  display: flex;
  /* justify-content: space-around; */
gap: 50px;
margin-bottom: 2rem;
`

const Label = styled.div`
  display: flex;
  align-items: center;
  gap:5px;
`

const LabelBox = styled.div`
  width: 15px;
  height: 15px;
  background-color: aqua;
`
const LabelText = styled.div`
`

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* background-color: yellow; */
  background-color: white;
  box-shadow: 0 3px 6px gray;
  padding: 10px 20px;
  border-radius: 5px;
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

const Dashboard = () => {

  const [totalOrders, setTotalOrders] = React.useState(0);
  const [totalRevenue, setTotalRevenue] = React.useState(0);
  const [totalUsers, setTotalUsers] = React.useState(0);

  const [allUsers, setAllUsers] = React.useState([]);
  const [allOrders, setAllOrders] = React.useState([]);

  const [pending,setPending] = React.useState(0);
  const [shipped,setShipped] = React.useState(0);
  const [delivered,setDelivered] = React.useState(0);

  // const pending = 0;
  // const shipped = 0;
  // const delivered = 0;

  const getOrders = async () => {
    try {
      const Ordersdata = await axios.get("http://localhost:5000/order/")
      setAllOrders(Ordersdata.data.reverse().slice(0, 5))

      setTotalOrders(Ordersdata.data.length)
      setTotalRevenue(Ordersdata.data.reduce((acc, order) => acc + order.totalprice, 0))

      for(let i = 0 ; i < Ordersdata.data.length ; i++){
        if(Ordersdata.data[i].status === 'Delivered'){
          setDelivered((old)=>old+1);
        }
        else if(Ordersdata.data[i].status === 'Shipped'){
          setShipped((old)=>old+1);
        }else if(Ordersdata.data[i].status === 'Pending'){
          setPending((old)=>old+1);
        }
      }


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

  //////////////////////////////

  const getUsers = async () => {
    try {
      const usersdata = await axios.get("http://localhost:5000/user/")
      setAllUsers(usersdata.data.reverse().slice(0, 5))
      setTotalUsers(usersdata.data.length)
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    getUsers();
  }, [])

  React.useEffect(() => {
    // console.log(allUsers)
  }, [allUsers])

  function deleteUser(id, index) {
    try {
      axios.delete(`http://localhost:5000/user/${id}`)
      // Table.deleteRow(index+1)
      // document.getElementById('alluserstable').removeRow(index+1)
      window.location.reload(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <StatsContainer>
        <Card>
          <CardIcon><EventNoteIcon style={{fontSize:'2rem'}}/></CardIcon>
          <CardInfo>
            <InfoNumber>{millify(totalOrders)}</InfoNumber>
            <InfoText>Total Orders</InfoText>
          </CardInfo>
        </Card>
        <Card>
          <CardIcon><CurrencyRupeeIcon style={{fontSize:'2rem'}}/></CardIcon>
          <CardInfo>
            <InfoNumber>{millify(totalRevenue)}</InfoNumber>
            <InfoText>Total Revenue</InfoText>
          </CardInfo>
        </Card>
        <Card>
          <CardIcon><PeopleOutlineIcon style={{fontSize:'2rem'}}/></CardIcon>
          <CardInfo>
            <InfoNumber>{millify(totalUsers)}</InfoNumber>
            <InfoText>Total Users</InfoText>
          </CardInfo>
        </Card>
      </StatsContainer>

      <SecondContainer>
        <PieContainer>
          <Labels>
            <Label><LabelBox style={{backgroundColor:'#1d4bd1'}}></LabelBox><LabelText>Pending</LabelText></Label>
            <Label><LabelBox style={{backgroundColor:'#fceb00'}}></LabelBox><LabelText>Shipped</LabelText></Label>
            <Label><LabelBox style={{backgroundColor:'#2bca30'}}></LabelBox><LabelText>Delivered</LabelText></Label>
          </Labels>

          <PieChart style={{ width: '70%' }}
            data={[
              { title: `${pending}`, value: pending, color: '#1d4bd1' },
              { title: `${shipped}`, value: shipped, color: '#fceb00' },
              { title: `${delivered}`, value: delivered, color: '#2bca30' },
            ]}
          />

        </PieContainer>
        <span>
            <h3 style={{fontWeight:'600',marginBottom:'1rem'}}>Latest Users</h3>

        <TableContainer style={{flex:0.55 ,marginRight:'1rem'}}>
            {/* <h3 style={{fontWeight:'600',marginBottom:'1rem'}}>Latest Users</h3> */}
          <Table id='alluserstable'>
            <tbody>

              <TableRow>
                <TableHeading style={{ borderLeft: 'none' }}>Id</TableHeading>
                <TableHeading>User</TableHeading>
                <TableHeading>Join Date</TableHeading>
                <TableHeading>Email</TableHeading>
                <TableHeading style={{ borderRight: 'none' }}>Action</TableHeading>
              </TableRow>

              {allUsers.length > 0 &&

                allUsers.map(({ firstname, lastname, email, _id, createdAt }, index) => (

                  <TableRow key={_id}>

                    <TableData style={{ borderLeft: 'none' }}>{index + 1}</TableData>
                    <TableData>{firstname + ' ' + lastname}</TableData>
                    <TableData>{(createdAt).replace("T", ' ')}</TableData>
                    <TableData >{email}</TableData>

                    <TableData style={{ borderRight: 'none' }}>
                      <Button><Link to={`/users/${_id}`} style={{ textDecoration: 'none', color: 'black' }}><PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon></Link></Button>
                      <Button onClick={() => deleteUser(_id, index)}><DeleteForeverOutlinedIcon /></Button>
                    </TableData>

                  </TableRow>
                ))
                
              }

            </tbody>
          </Table>
        </TableContainer>
        </span>
      </SecondContainer>

      <span>
            <h3 style={{fontWeight:'600',marginBottom:'1rem'}}>Latest Orders</h3>
      <TableContainer style={{margin:'1rem'}}>

        <Table id='allOrderstable'>
        {/* <h3 style={{fontWeight:'600',marginBottom:'1rem'}}>Latest Orders</h3> */}

          <tbody>

            <TableRow>
              <TableHeading style={{ borderLeft: 'none' }}>Order Id</TableHeading>
              <TableHeading>User Id</TableHeading>
              <TableHeading>Created Date</TableHeading>
              <TableHeading>Total Products</TableHeading>
              <TableHeading>Total Price</TableHeading>
              <TableHeading>Status</TableHeading>
              <TableHeading style={{ borderRight: 'none' }}>Action</TableHeading>

            </TableRow>

            {allOrders.length > 0 &&

              allOrders.map(({ _id, userid, createdAt, totalproducts, totalprice, status }, index) => (

                <TableRow key={_id}>


                  <TableData style={{ borderLeft: 'none' }}>{_id}</TableData>
                  <TableData>{userid}</TableData>
                  <TableData>{createdAt.replace("T", " ")}</TableData>
                  <TableData>{totalproducts.reduce((acc, product) => acc + product.quantity, 0)}</TableData>
                  <TableData>{totalprice}</TableData>
                  <TableData >{status}</TableData>

                  <TableData style={{ borderRight: 'none' }}>
                    <Link to={`/orders/${_id}`}>
                      <Button><ModeEditOutlineOutlinedIcon /></Button>
                    </Link>
                    <Button onClick={() => deleteorder(_id)}><DeleteForeverOutlinedIcon /></Button>
                  </TableData>

                </TableRow>
              ))

            }

          </tbody>
        </Table>
      </TableContainer>
      </span>
    </Container>
  )
}

export default Dashboard