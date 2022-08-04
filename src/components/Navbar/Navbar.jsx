import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import logo from '../../assets/images/placeholder-logo.png'
import styles from '../../assets/css/navbar.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ cart }) {

    const location = useLocation()

  return (
    <>
        <AppBar position='fixed' className={styles.appBar} color='inherit'>
            <Toolbar>
                <Typography component={Link} to="/" variant='h6' className={styles.title} color='inherit'>
                    <img src={logo} alt='Commerce.js' className={styles.image} height={'25px'} />
                    Commerce.js
                </Typography>
                {location.pathname === '/' && (
                    <div className={styles.button}>
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