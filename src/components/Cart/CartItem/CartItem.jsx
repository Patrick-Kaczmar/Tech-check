import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'

export default function CartItem({ item, handleUpdateCartQty, handleRemoveFromCart}) {

  return (
    <Card>
        <CardMedia image={item.image.url} alt={item.name} style={{height: '260px'}}/>
        <CardContent style={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant='h4'>{item.name}</Typography>
            <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions style={{justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
            </div>
            <Button variant='contained' type='button' color='error' onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
        </CardActions>
    </Card>
  )
}