import React, { useState } from 'react'
import { Typography, Card, CardContent, CardHeader, Container, Grid, IconButton, Paper, CardMedia, CardActions } from '@mui/material'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function ProductCard({product}) {

  const [active,setActive]=useState(true)
  const HandelAddToFav= (id) => {


  }
  return (

    <div>

   
      <Card elevation={2}>
      <CardHeader 
      action= {
        <IconButton onClick={e => {
          console.log("add to fav", product.id)
          setActive(!active);
          HandelAddToFav();

        }}
       
        >
          {active ? <FavoriteBorderSharpIcon /> : <FavoriteIcon color="success"/>}

        </IconButton>
      }
      title={product.title}
      subheader = {product.type}
      
      />
      <CardMedia
        component="img"
        height="300"
        width="300"
        image={product.filename}
        alt={product.rating}
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
        {product.description}

      </Typography>
      
      </CardContent>
      <CardActions sx={{   display: "flex",
    justifyContent: "space-between"}}>
      <IconButton>
         <ShoppingCartIcon color="secondary" />
        </IconButton>

        <IconButton>
         <CheckIcon color="error" />
        </IconButton>
      </CardActions>

    </Card>
    </div>
    


    
  )
}
