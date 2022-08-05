import React from 'react'
import { Container, Typography, Button, Grid } from '@mui/material'
import CartItem from './CartItem/CartItem'
import { Link } from 'react-router-dom'

export default function Cart({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) {


    if (!cart?.line_items) {
        return <div style={{marginTop: '90px'}}>'Loading... no line items'</div>
    }

    const EmptyCart = () => (
        <Typography variant='subtitle1'>You have no items in your cart, <Link to='/' style={{textDecoration: 'none'}}>start adding some</Link>!</Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div style={{display: 'flex', marginTop: '10%', width: '100%', justifyContent: 'space-between'}}>
                <Typography variant='h4'>
                    Subtotal: { cart.subtotal.formatted_with_symbol }
                </Typography>
                <div>
                    <Button style={{minWidth: '150px'}} size='large' type='button' variant='contained' color='error' onClick={() => handleEmptyCart()}>Empty Cart</Button>
                    <Button component={Link} to='/checkout' style={{minWidth: '150px'}} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
                </div>
            </div>
        </>
    )

  return (
    <Container>
        <div style={{marginTop: '90px'}}/>
        <Typography style={{marginTop: '5%'}} variant='h3' gutterBottom>Your Shopping Cart</Typography>
        { !cart?.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}