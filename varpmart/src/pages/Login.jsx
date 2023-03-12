import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
                    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
    background-size: cover;

    
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 30%;
    background-color: white;

`

const Title = styled.h1`
    font-weight: 400;
    font-size: 24px;
    margin: 10px 0;
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
    
    
`

const Button = styled.button`
    width: 40%;
    padding: 10px;
    background-color: teal;
    border: none;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const Links = styled.a`
    text-decoration: underline;
    margin: 5px 0 ;
    cursor: pointer;
    color: black;
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

                <Button onClick={loginuser}>LOGIN</Button>

                <Links href='#'>Forgot password ?</Links>
                <Links href='/register'>Create a new account</Links>

            </Wrapper>
        </Container>
    )
}

export default Login