import React from 'react'
import styles from '../../../assets/css/cartItems.module.css'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'

export default function CartItem({ item }) {
  return (
    <Card>
        <CardMedia image={item.image.url} alt={item.name} className={styles.media}/>
        <CardContent className={styles.cardContent}>
            <Typography variant='h4'>{item.name}</Typography>
            <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions className={styles.cardActions}>
            <div className={styles.buttons}>
                <Button type='button' size='small'>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type='button' size='small'>+</Button>
            </div>
            <Button variant='contained' type='button' color='error'>Remove</Button>
        </CardActions>
    </Card>
  )
}