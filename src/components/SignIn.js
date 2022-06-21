import React, { Component } from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { Avatar, Container, CssBaseline, Box, Typography, TextField, Grid, FormControlLabel, Checkbox, Button } from '@mui/material';
import {Link} from "react-router-dom"

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const mytheme = createTheme();

class SignIn extends Component {


     handelSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(
                {
                    email : data.get('email'),
                    password: data.get('password'),
                }


        )
    }

    render() {
        return (
            <ThemeProvider theme={mytheme}>
                <Container component ="main" maxWidth="xs">
                    <CssBaseline /> 
                    <Box 
                    sx= {{
                        marginTop : 8, 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'


                    }}>

                    <Avatar sx={{
                        m: 1, bgcolor: 'secondery.main'
                    }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant='h5'>
                        Sign in 
                    </Typography>
                    <Box component="form" onSubmit= {this.handelSubmit} noValidate sx={{mt: 1}}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField 
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus>
                            
                        </TextField>
                        

                    </Grid>

                    <Grid item xs={12}>
                             
                        <TextField
                        required
                        fullWidth
                        name="password"
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        autoFocus>
                        </TextField>

                    </Grid>
                    <FormControlLabel
                    control={<Checkbox value="remmber" color="secondary" />}
                    label ="Remember me" />
                    <Button
                    type="submit"
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2}}>
                        Sign in 
                    </Button>
                    <Grid item>
                        <Link to="/SignUp">
                            {"Don't have an account ? Sign up"}
                        </Link>
                    </Grid>

                </Grid>
                
                        
                        


                    </Box>

                </Box>




                </Container>



            </ThemeProvider>
        );
    }
}

export default SignIn;