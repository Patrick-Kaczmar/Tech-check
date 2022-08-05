import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

export default function Product({props, onAddToCart}) {

  return (
    <Card style={{maxWidth: '100%'}}>
        <CardMedia style={{height: '0px', padding: '56.25%'}} image={props.image.url} title={props.name} />
        <CardContent>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant='h5' gutterBottom>
                    {props.name}
                </Typography>
                <Typography variant='h5'>
                    {props.price.formatted_with_symbol}
                </Typography>
            </div>
            <Typography dangerouslySetInnerHTML={{__html: props.description}} variant='body2' />
        </CardContent>
        <CardActions style={{display: 'flex', justifyContent: 'flex-end'}} disableSpacing>
            <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(props.id, 1)}>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}