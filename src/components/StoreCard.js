import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Grid } from "@mui/material"
import styles from "../assets/css/store.module.css"
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function StoreCard() {
  const storeItems = [
    {
      color: "Red",
      price: 1,
      id: 1,
    },
    {
      color: "Blue",
      price: 2,
      id: 2,
    },
    {
      color: "Green",
      price: 3,
      id: 3,
    },
    {
      color: "Orange",
      price: 4,
      id: 4,
    },
    {
      color: "Purple",
      price: 5,
      id: 5,
    },
    {
      color: "Black",
      price: 6,
      id: 6,
    },
  ]

  return (
    <div className={styles.gridContainer}>
      <Grid container spacing={6}>
        {storeItems.map((item) => (
          <Grid key={item.id} item xs={4}>
            <Card>
              <div
                className={styles.cardTopper}
                style={{ backgroundColor: item.color }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  {item.color}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  The price for {item.color} is ${item.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <IconButton color="primary" aria-label="add to shopping cart">
                  <span>Add to cart &nbsp;</span> <AddShoppingCartIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
