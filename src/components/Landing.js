import React from 'react';
import {Typography, Grid, Card, CardContent, CardActions, Button} from '@mui/material'; 
import {Link} from "react-router-dom";
function Landing() {



    return (
        <div>
             <Typography component="h1" variant='h2'> My Landing Page</Typography>
     <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
          

            
           
        </div>
    );
}

export default Landing;