import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Container = styled.div`
  /* background-color: yellow; */
  height: 100vh;
  padding: 20px;
  margin-top: 15px;
`

const Heading = styled.h2`
  font-weight: 400;
  margin-bottom: 20px;
`

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:white;
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
  border: 1px solid lightgray;
  border-collapse:collapse;
  padding: 5px 5px;
  text-align: center;
`

const Button = styled.button`
  padding: 2px 5px;
  border: none;
  background-color: white;
  margin: 0 5px;
  cursor: pointer;
`

const Users = () => {



  const [allUsers, setAllUsers] = React.useState([]);
  const getUsers = async () => {
    try {
      const usersdata = await axios.get("http://localhost:5000/user/")
      setAllUsers(usersdata.data)
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    getUsers();
  }, [])

  React.useEffect(() => {
    console.log(allUsers)
  }, [allUsers])

  function deleteUser(id,index){
    try{
      axios.delete(`http://localhost:5000/user/${id}`)
      // Table.deleteRow(index+1)
      // document.getElementById('alluserstable').removeRow(index+1)
      window.location.reload(false)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <Container>
      
      <Heading>Customers</Heading>
      <TableContainer>

        <Table id='alluserstable'>
          <tbody>

            <TableRow>
              <TableHeading style={{borderLeft:'none'}}>Id</TableHeading>
              <TableHeading>User</TableHeading>
              <TableHeading>Join Date</TableHeading>
              <TableHeading>Email</TableHeading>
              <TableHeading style={{borderRight:'none'}}>Action</TableHeading>
            </TableRow>

            {allUsers.length>0 &&
              
              allUsers.map(({firstname,lastname,email,_id,createdAt},index) => (
                
                <TableRow key={_id}>
                  
                  <TableData style={{borderLeft:'none'}}>{index+1}</TableData>
                  <TableData>{firstname+' '+lastname}</TableData>
                  <TableData>{(createdAt).replace("T",' ')}</TableData>
                  <TableData >{email}</TableData>

                  <TableData style={{borderRight:'none'}}>
                    <Button><Link to={`/users/${_id}`} style={{textDecoration:'none',color:'black'}}><PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon></Link></Button>
                    <Button onClick={()=>deleteUser(_id,index)}><DeleteForeverOutlinedIcon/></Button>
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

export default Users
