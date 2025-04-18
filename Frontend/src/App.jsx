import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import { Route, Routes } from 'react-router-dom'
import Marketplace from './Pages/Marketplace'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/market' element={<Marketplace/>}/>
      </Routes>
    </div>
  )
}

export default App
