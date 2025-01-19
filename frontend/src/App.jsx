import React from 'react'
import Header from './layout/Header'
import Home from './pages/Home'
import Footer from './layout/Footer'
import Login from './pages/Login'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import Product from './pages/Product'
import Cardlist from './components/Cardlist'
import Search from './pages/Search'
import WishList from '../src/pages/WishList'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<WishList/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  ) 
}

export default App