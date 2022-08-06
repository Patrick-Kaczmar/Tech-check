import React, { useState, useEffect, useCallback } from "react"
import { Routes, Route } from "react-router-dom"
import { commerce } from "./lib/commerce"
import Products from "./components/Products/products"
import Navbar from "./components/Navbar/Navbar"
import Cart from "./components/Cart/Cart"
import Checkout from './components/CheckoutForm/Checkout/Checkout'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()

    setCart(cart)
  }

  const handleAddToCart = useCallback(async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    console.log("this is the item")
    console.log(item)
    setCart(item)
  }, [])

  const handleUpdateCartQty = useCallback(async (productId, quantity) => {
    const cart = await commerce.cart.update(productId, { quantity })
    console.log("this is the cart")
    console.log(cart)
    setCart(cart)
    console.log('the cart has been updated')
  }, [])

  const handleRemoveFromCart = useCallback(async (productId) => {
    const cart = await commerce.cart.remove(productId)
    console.log("this is the cart")
    console.log(cart)
    setCart(cart)
  }, [])

  const handleEmptyCart = useCallback(async () => {
    const cart = await commerce.cart.empty()
    console.log("this is the cart")
    console.log(cart)
    setCart(cart)
  }, [])

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()
    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
      setOrder(incomingOrder)
    } catch (error){
      setErrorMessage(error.data.error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <div>
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <Products products={products} onAddToCart={handleAddToCart} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          }
        />
        <Route path="/checkout" element={<Checkout cart={cart} order={order} handleCaptureCheckout={handleCaptureCheckout} refreshCart={refreshCart} error={errorMessage}/>}/>
      </Routes>
    </div>
  )
}

export default App
