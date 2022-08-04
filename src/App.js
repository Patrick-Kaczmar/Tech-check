import React, { useState, useEffect, useCallback } from "react"
import { commerce } from "./lib/commerce"
import Products from "./components/Products/products"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    console.log('this is the cart')
    console.log(cart)
    setCart(cart)
  }

  const handleAddToCart = useCallback(async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    console.log('this is the item')
    console.log(item)
    setCart(item)
  }, [])

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <div>
      <Navbar cart={cart}/>
      <Products products={products} onAddToCart={handleAddToCart}/>
    </div>
  )
}

export default App
