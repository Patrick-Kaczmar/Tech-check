import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import styles from  '../../../assets/css/product.module.css'

export default function Product({props}) {
  return (
    <Card className={styles.root}>
        <CardMedia className={styles.media} image={props.image} title={props.name} />
        <CardContent>
            <div className={styles.cardContent}>
                <Typography variant='h5' gutterBottom>
                    {props.name}
                </Typography>
                <Typography variant='h5'>
                    {props.price}
                </Typography>
            </div>
            <Typography variant='body2'>
                {props.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing className={styles.cardActions}>
            <IconButton aria-label='Add to Cart'>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}