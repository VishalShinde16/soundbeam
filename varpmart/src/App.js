import React from 'react';
import { Routes,Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import MyOrders from './pages/MyOrders';
import OrderDetails from './pages/OrderDetails';
import About from './pages/About';
import Success from './pages/Success';
import Failure from './pages/Failure';


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
        <Route path='/orders/:userid' element={<MyOrders/>}/>
        <Route path='/orders/:userid/:orderid' element={<OrderDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/checkout/success' element={<Success/>}/>
        <Route path='/checkout/failure' element={<Failure/>}/>






      </Routes>
    </div>
  );
}

export default App;
