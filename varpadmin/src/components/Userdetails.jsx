import axios from 'axios';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div``

const Wrapper = styled.div``


const Userdetails = () => {

  const userid = window.location.pathname.split('/')[2];

  const [user,setUser] = React.useState({});

  const getUserData = async ()=>{
    try{
        const userdata = await axios.get(`http://localhost:5000/user/${userid}`)
        setUser(userdata);

    }catch(err){
      console.log(err)
    }
  }

  React.useEffect(()=>{
    getUserData()
  },[])

  React.useEffect(()=>{
    console.log(user)
  },[user])

  return (
    <div>
      userdetails
    </div>
  )
}

export default Userdetails
