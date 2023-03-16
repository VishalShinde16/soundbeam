import styled from 'styled-components'

import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Orders from './components/Orders'
import Products from './components/Products'
import Users from './components/Users'
import Userdetails from './components/Userdetails'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import EditOrder from './components/EditOrder'
import Login from './components/Login'

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #f3f2f2e0;
  justify-content: space-between;
`
const NavbarSection = styled.div`
  flex: 0.17;
  background-color: white;
  box-shadow: 0 4px 8px gray;
`
const MainSection = styled.div`
  flex: 0.82;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
`

function App() {
  return (

    <Container>
      {/* localStorage.getItem('userid')   */}

      

        {localStorage.getItem('userid') ?
          <>
          <NavbarSection>
            <Navbar />
          </NavbarSection>
          
            <MainSection>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                {/* <Route path='/login' element={<Login />} /> */}


                <Route path='/orders' element={<Orders />} />

                <Route path='/orders/:id' element={<EditOrder />} />

                <Route path='/products' element={<Products />} />
                <Route path='/products/addproduct' element={<AddProduct />} />
                <Route path='/products/editproduct/:id' element={<EditProduct />} />

                <Route path='/users' element={<Users />} />
                <Route path='/users/:id' element={<Userdetails />} />

              </Routes>
            </MainSection>
          </>
          :
         <>
          <Login/>
         </>
        }
      

      {/* {window.location.href = '/login'} */}
    </Container>
  );
}

export default App;
