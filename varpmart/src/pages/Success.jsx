import axios from 'axios';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  margin:auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 10px;
  padding: 3rem 4rem;
  background-color: #18bc18;
  box-shadow: 0 4px 8px gray;
`

const Title = styled.h2`
  color:white;
  margin: 2rem 0;
`

const Subtext = styled.p`
  
`
const Success = () => {

  let sub = 0;
  const [userid, setUserid] = React.useState('');
  let cartdata = [];

  React.useEffect(() => {

    setUserid(localStorage.getItem('userid'))

  }, [])

  const products = Object.keys(localStorage)


  for (let i = 0; i < products.length; i++) {
    products[i] !== 'userid' && cartdata.push(JSON.parse(localStorage.getItem(products[i])));
  }

  
  
    for (let i = 0; i < cartdata.length; i++) {
      sub = sub + Number(cartdata[i].subtotal)
    }
   
  


  function EmptyCart() {

    for (let i = 0; i < products.length; i++) {
      products[i] !== 'userid' && localStorage.removeItem(products[i]);

    }
    window.location.reload(false);
  }
  const putOrdersToDB = () => {

    const order = {
      userid: JSON.parse(userid),
      cartproducts: cartdata,
      totalprice: Number(sub)+50
    }

    try {
      axios.post("http://localhost:5000/order/addorder", order)
    } catch (err) {
      console.log(err)
    }
  }

  const updateDb = async () => {

    for (let i = 0; i < cartdata.length; i++) {
      try {
        const olddata = await axios.get(`http://localhost:5000/product/${cartdata[i].id}`)

        const newdata = {
          ...olddata,
          quantity: Number(olddata.data.quantity) - Number(cartdata[i].quantity)
        }

        await axios.put(`http://localhost:5000/product/${cartdata[i].id}`, newdata)

      } catch (err) {
        console.log(err)
      }
    }
  }


  React.useEffect(() => {
    userid && cartdata.length > 0 && 
      <>
        
        {alert("Order has been placed!")}
        {putOrdersToDB()}
        {updateDb()}
        {EmptyCart()}
      </>
  }, [userid])



  return (
    <Container>
      <Wrapper>
        <Title>Order Successfull</Title>
        <Subtext>Thank you so much for your order!</Subtext>
      </Wrapper>
    </Container>
  )
}

export default Success
