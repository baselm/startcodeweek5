import { Container, Grid } from '@mui/material'
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
  return (

        
         <Container>

       
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
