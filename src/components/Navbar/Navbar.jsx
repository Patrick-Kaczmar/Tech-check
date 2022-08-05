import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import logo from '../../assets/images/placeholder-logo.png'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ cart }) {


    const location = useLocation()

  return (
    <>
        <AppBar position='fixed' style={{boxShadow: 'none', borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}} color='inherit'>
            <Toolbar>
                <Typography component={Link} to="/" variant='h6' style={{flexGrow: 1, alignItems: 'center', display: 'flex', textDecoration: 'none'}} color='inherit'>
                    <img src={logo} alt='Commerce.js' style={{marginRight: '10px'}} height={'25px'} />
                    Commerce.js
                </Typography>
                {location.pathname === '/' && (
                    <div>
                    <IconButton component={Link} to="/cart" aria-label='show cart items' color='inherit'>
                        <Badge badgeContent={cart.total_items} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
                )}
            </Toolbar>
        </AppBar>
    </>
  )
}