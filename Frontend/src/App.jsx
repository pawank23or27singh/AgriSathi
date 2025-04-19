import React from 'react'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import { Route, Routes } from 'react-router-dom'
import Marketplace from './Pages/Marketplace'
import Services from './Pages/Services'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/market' element={<Marketplace/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
