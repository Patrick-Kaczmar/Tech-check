import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import logo from '../../assets/images/placeholder-logo.png'
import styles from '../../assets/css/navbar.module.css'

export default function Navbar({ cart }) {
  return (
    <>
        <AppBar position='fixed' className={styles.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={styles.title} color='inherit'>
                    <img src={logo} alt='Commerce.js' className={styles.image} height={'25px'} />
                    Commerce.js
                </Typography>
                <div className={styles.button}>
                    <IconButton aria-label='show cart items' color='inherit'>
                        <Badge badgeContent={cart.total_items} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </>
  )
}