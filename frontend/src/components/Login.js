import React from 'react';
import '../styles/Login.css';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link} from "@mui/material";

const login = ({handleChange}) => {
    const loginInterfaceStyle = { padding:20, height:'70vh', width: 350, margin: "0 auto" }
    const loginHeaderStyle = { margin: 2 }
    const loginButtonStyle = { marginTop: 10, marginBottom:10 }
    const loginAvatarStyle = { backgroundColor: '#1bbd7e' }
    return (
        <Grid>
            <Paper style={loginInterfaceStyle}>
                <Grid align='center'>
                    <Avatar style={loginAvatarStyle}>
                    </Avatar>
                    <h2 style={loginHeaderStyle} className='loginFormHeader'>Sign In</h2>
                </Grid>
                <form className='loginForm'>
                    <TextField fullWidth label='Email' id="standard-basic" variant="standard" required></TextField>
                    <TextField fullWidth label='Password' id="standard-basic" variant="standard" type="password" required></TextField>
                    <Button style={loginButtonStyle} type='submit' variant="contained" color='primary' fullWidth>Sign In</Button>
                    <Typography align='center'> Don't have an account
                        <Link onClick={() => handleChange("event", 1)} className='loginLink'>
                            Sign Up
                        </Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    )

};

export default login;

