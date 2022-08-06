import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Toolbar } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

export default function Product({props, onAddToCart}) {

  return (
    <Card style={{maxWidth: '100%'}}>
        <CardMedia style={{height: '276px', width: '276px', margin: 'auto'}} image={props.image.url} title={props.name} />
        <CardContent>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant='h5' gutterBottom>
                    {props.name}
                </Typography>
                <Typography variant='h5'>
                    {props.price.formatted_with_symbol}
                </Typography>
            </div>
            <Toolbar style={{justifyContent: 'space-between'}}>
                <Typography dangerouslySetInnerHTML={{__html: props.description}} variant='body2' />
                <CardActions disableSpacing>
                    <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(props.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Toolbar>
        </CardContent>
    </Card>
  )
}