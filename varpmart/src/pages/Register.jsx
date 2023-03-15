import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import bg1 from '../images/bg1.jpg'
import bg3 from '../images/bg3.jpg'
import bg4 from '../images/bg4.jpg'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(rgba(1,1,1,0.5),rgba(100,100,100,0.8)),
                    url(${bg4});
    background-size: cover;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 40%;
    background-color: #2d2d2d;
    margin:0 5rem;
    box-shadow: 0 4px 8px black;

  
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
    color: lightgray;
`

const Aggrement = styled.span`
    font-size: 14px;
    margin: 10px 0px;
    color:lightgray;

`

const Button = styled.button`
    width: 40%;
    padding: 5px 10px;
    background-color: #d0b48f;
    border:1px solid #d0b48f;
    color: #2d2d2d;
    cursor: pointer;
    margin:1rem 0;

    &:hover{
        background-color: transparent;
        color:#d0b48f;
    }
`

const Links = styled.a`
    text-decoration: underline;
    /* margin: 5px 0 ; */
    cursor: pointer;
    color: gray;
    
`
const Register = () => {

    const [userData, setUserData] = React.useState(
        {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        }
    );
    
    function handleChange(event) {
        setUserData(
            {...userData,
                [event.target.name]:event.target.value        
            }
        )
    }

    async function registerUser () {
        
            if(userData.firstname && userData.lastname && userData.username && userData.email && userData.password && userData.confirmpassword)
            {
                if(userData.password === userData.confirmpassword)
                {
                    try{

                        const res = await axios.post("http://localhost:5000/auth/register",userData)
                        alert(res)
                        window.location.href = '/login'
                    }catch(err){
                        alert(err)
                    }
                    
                }
                else{
                    alert('check your confirm password again!')
                }

            }
            else{
                alert('Please fill all the fields')
            }

        
    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='First Name' name='firstname' value={userData.firstname} onChange={handleChange} />
                    <Input placeholder='Last Name' name='lastname' value={userData.lastname} onChange={handleChange}/>
                    <Input placeholder='Username' name='username' value={userData.username} onChange={handleChange}/>
                    <Input placeholder='Email' type='email' name='email' value={userData.email} onChange={handleChange}/>
                    <Input placeholder='Password' type='password' name='password' value={userData.password} onChange={handleChange}/>
                    <Input placeholder='Confirm Password' type='password' name='confirmpassword' value={userData.confirmpassword} onChange={handleChange}/>
                </Form>

                <Aggrement>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea dicta alias minus deserunt, atque doloribus!
                </Aggrement>

                <Links href='/login'>Already have an account ? click here</Links>
                <Button onClick={registerUser}>CREATE</Button>
            </Wrapper>
        </Container>
    )
}

export default Register