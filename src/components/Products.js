import { Box, Container, Grid, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from './ProductCard'
export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(
        () => {
            fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        }
    )

    const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (

        
         <Container>
            <Grid container >
                <Grid item lg={12}>
                <Typography component="h2" variant="h1" color="secondary" align="center" sx={{mt:4}}>
                 Products Page 
                
                
            </Typography>
            <LinearProgress variant="determinate" value={progress} color="secondary"/>

                </Grid>
            

            </Grid>
            
           

       
        <Grid container spacing={2}>
            
            {
            products.map(product => (
                <Grid item xs={12} md={6} lg={4} key={product.id}>
                <ProductCard product={product}/>
                </Grid>
            ))
            } 

            </Grid>
            </Container>
            
        


  )
}
