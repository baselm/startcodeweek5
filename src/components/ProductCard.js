import React, { useState } from 'react'
import { Typography, Card, CardContent, CardHeader, Container, Grid, IconButton, Paper, CardMedia } from '@mui/material'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function ProductCard({product}) {

  const [active,setActive]=useState(true)
  const HandelAddToFav= (id) => {


  }
  return (

    <div>

   
      <Card>
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

    </Card>
    </div>
    


    
  )
}
