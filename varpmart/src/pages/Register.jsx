import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
                    url('https://img.freepik.com/premium-photo/model-being-covered-by-shopping-bags-copy-space_23-2148674119.jpg?w=2000') center;
    background-size: cover;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 40%;
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

const Aggrement = styled.span`
    font-size: 14px;
    margin: 10px 0px;


`

const Button = styled.button`
    width: 40%;
    padding: 10px;
    background-color: teal;
    border: none;
    color: white;
    cursor: pointer;
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
                    <Input placeholder='Email' name='email' value={userData.email} onChange={handleChange}/>
                    <Input placeholder='Password' name='password' value={userData.password} onChange={handleChange}/>
                    <Input placeholder='Confirm Password' name='confirmpassword' value={userData.confirmpassword} onChange={handleChange}/>
                </Form>

                <Aggrement>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea dicta alias minus deserunt, atque doloribus!
                </Aggrement>

                <Button onClick={registerUser}>CREATE</Button>
            </Wrapper>
        </Container>
    )
}

export default Register