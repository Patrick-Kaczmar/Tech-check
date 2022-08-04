import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product/Product'
import styles from '../../assets/css/products.module.css'

export default function Products({ products, onAddToCart }) {
    return (
        <main className={styles.content}>
            <div className={styles.toolbar}/>
            <Grid container justifyContent={'center'} spacing={4}>
                {products.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <Product props={item} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}