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
const AddProduct = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #1d4bd1;
  border: none;
  color: white;

`
const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 10px;
  margin: 20px;
  box-shadow: 0 4px 8px lightgray;

  /* background-color: yellow; */
`

const Table = styled.table`
  /* border: 1px solid lightgray; */
  border-collapse: collapse;
  width: 100%;
`

const TableHeading = styled.th`
  border: 1px solid lightgray;
  border-collapse:collapse;
  border-top: none;
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
  margin: 0 5px;
  border: none;
  cursor: pointer;
  background-color: white;
`

const ProductImage = styled.img`
  width: 100px;
`



const Products = () => {



  const [allProducts, setAllProducts] = React.useState([]);
  const getProducts = async () => {
    try {
      const Productsdata = await axios.get("http://localhost:5000/product/")
      setAllProducts(Productsdata.data)
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    getProducts();
  }, [])

  React.useEffect(() => {
    console.log(allProducts)
  }, [allProducts])

  function deleteproduct(id, index) {
    try {
      axios.delete(`http://localhost:5000/product/${id}`)
      // Table.deleteRow(index+1)
      // document.getElementById('allProductstable').removeRow(index+1)
      window.location.reload(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <TopContainer>
        <Heading>All Products</Heading>
        <Link to='/products/addproduct'>
        <AddProduct>+ Add Product</AddProduct>
        </Link>
      </TopContainer>

      <TableContainer>

        <Table id='allProductstable'>
          <tbody>

            <TableRow>
              <TableHeading style={{borderLeft:'none'}}>Id</TableHeading>
              <TableHeading>Thumbnail</TableHeading>
              <TableHeading>Product</TableHeading>
              <TableHeading>Type</TableHeading>
              <TableHeading>Price</TableHeading>
              <TableHeading>Quantity</TableHeading>
              <TableHeading style={{borderRight:'none'}}>Action</TableHeading>

            </TableRow>

            {allProducts.length > 0 &&

              allProducts.map(({ imgurl, productname, type, price, quantity, _id }, index) => (

                <TableRow key={_id}>


                  <TableData style={{borderLeft:'none'}}>{index + 1}</TableData>
                  <TableData><ProductImage src={imgurl} /></TableData>
                  <TableData>{productname}</TableData>
                  <TableData>{type}</TableData>
                  <TableData>{price}</TableData>
                  <TableData>{quantity}</TableData>

                  <TableData style={{borderRight:'none'}}>
                    <Link to={`/products/editproduct/${_id}`}>
                    <Button><ModeEditOutlineOutlinedIcon/></Button>
                    </Link>
                    <Button onClick={() => deleteproduct(_id)}><DeleteForeverOutlinedIcon/></Button>
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

export default Products
