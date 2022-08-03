import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product/Product'
import styles from '../../assets/css/products.module.css'

const products = [
    {
        id: 1,
        name: 'shoes',
        description: 'running shoes',
        price: '$5',
        image: 'https://www.popsci.com/uploads/2021/01/14/54BGRKCC7BEAPGZ3XAK5RHJF6M.jpg?auto=webp'
    },
    {
        id: 2,
        name: 'Macbook',
        description: 'Apple macbook',
        price: '$10',
        image: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs.jpg'
    }
]

export default function Products() {
    return (
        <main className={styles.content}>
            <div className={styles.toolbar}/>
            <Grid container justifyContent={'center'} spacing={4}>
                {products.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <Product props={item} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
    
}