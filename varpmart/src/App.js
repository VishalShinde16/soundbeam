import React from 'react';
import { Routes,Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';


function App() {

  return (
    <div className="App" style={{backgroundColor:'#f3f2f2e0'}}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>
    </div>
  );
}

export default App;
