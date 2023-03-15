import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

import bg2 from '../images/bg2.jpg'
import bg1 from '../images/bg1.jpg'
import bg3 from '../images/bg3.jpg'



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(1,1,1,0.5),rgba(100,100,100,0.8)),
                    url(${bg2}) center;
    background-size: cover;

    
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 30%;
    background-color: #2d2d2d;
    box-shadow: 0 4px 8px black;
    border-radius: 5px;

`

const Title = styled.h1`
    font-weight: 400;
    font-size: 24px;
    margin: 10px 0;
    color:#d0b48f;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 15px 0px;

    
    
`

const Input = styled.input`
    margin:0 50px 15px 0px;
    padding: 10px;
    font-size: 14px;
    background-color: transparent;
    border:1px solid gray;
    color:lightgray;
    
`

const Button = styled.button`
    width: 40%;
    padding: 5px 10px;
    background-color: teal;
    border: 1px solid #d0b48f;
    color: #2d2d2d;
    background-color: #d0b48f;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 1rem;
    &:hover{
        background-color: transparent;
        color:#d0b48f;
        transition: 0.3s ease-in-out;
    }
`

const Links = styled.a`
    text-decoration: underline;
    margin: 5px 0 ;
    cursor: pointer;
    color: gray;
    
`
const Login = () => {
    const [userData,setUserData] = React.useState({username:'',password:''});

    
    function handleChange(event){
        setUserData(
            {
                ...userData,
                [event.target.name]:event.target.value
            }
        )
    }

    async function loginuser(){
        try{
            const res = await axios.post("http://localhost:5000/auth/login",userData)        
            if(!res.status === 200){
                alert(res)
            }
            else{
                alert('Login successfull')
                // console.log(res.data._id)
                // props.sentid(res.data._id)
                localStorage.setItem('userid',JSON.stringify(res.data._id))
                window.location.href = '/'
            }
            
        }catch(err){
            alert(err)
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='Username' name='username' value={userData.username} onChange={handleChange}/>
                    <Input placeholder='Password' name='password' value = {userData.password} onChange={handleChange}/>
                </Form>

                <Button onClick={loginuser}>Login</Button>

                <Links href='#'>Forgot password ?</Links>
                <Links href='/register'>Create a new account</Links>

            </Wrapper>
        </Container>
    )
}

export default Login