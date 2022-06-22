import React from 'react';
import {Typography, Card, CardContent, CardActions, Container} from '@mui/material'; 
import {Link} from "react-router-dom";
function Landing() {



    return (
   <Container>
     <Typography component="h1" variant='h2'> My Landing Page</Typography>
     <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi aliquam placeat officiis, delectus beatae labore dolor fuga distinctio explicabo, ratione commodi dolores optio recusandae! Quisquam at unde perferendis quos iste.
        </Typography>
         
      </CardContent>
      <CardActions>
      <Link to="/SignUp">
                                {"Don't have an account ? Sign up"}
                            </Link>

                            <Link 
                    to="/SignIn"
                
                >
                    Already have an account? Sign in
                </Link>
      </CardActions>
    </Card>
          

            
           
        </Container>
    );
}

export default Landing;