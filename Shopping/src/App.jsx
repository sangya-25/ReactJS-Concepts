import './App.css'

import { Fragment } from "react"
import { Route, Router, Routes } from "react-router-dom"
import ProductList from "./pages/productList"
import ProductDetails from "./pages/productDetails"
import CartList from "./pages/cartList"
import HomePage from './components/Home-page'
import Checkout from './components/checkOut'

function App() {
  return (
    <Fragment>
      <Routes>
      <Route path="/product-list" element={<ProductList/>}/>
      <Route path="/product-details/:id" element={<ProductDetails/>}/>
      <Route path="/cart-list" element={<CartList/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </Fragment>
  )
}

export default App
