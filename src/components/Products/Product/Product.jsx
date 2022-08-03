import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import styles from  '../../../assets/css/product.module.css'

export default function Product({props, onAddToCart}) {

  return (
    <Card className={styles.root}>
        <CardMedia className={styles.media} image={props.image.url} title={props.name} />
        <CardContent>
            <div className={styles.cardContent}>
                <Typography variant='h5' gutterBottom>
                    {props.name}
                </Typography>
                <Typography variant='h5'>
                    {props.price.formatted_with_symbol}
                </Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{__html: props.description}} variant='body2' />
        </CardContent>
        <CardActions disableSpacing className={styles.cardActions}>
            <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(props.id, 1)}>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}