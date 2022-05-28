import React from "react";
import '../styles/Signup.css';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

const signup = ({handleChange}) => {
    const signupInterfaceStyle = { padding:20, width: 350, margin: '0 auto' }
    const signupHeaderStyle = { margin: 2 }
    const signupButtonStyle = { marginTop: 10, marginBottom:10 }
    const signupAvatarStyle = { backgroundColor: '#1bbd7e' }
    return (
        <Grid>
            <Paper style={signupInterfaceStyle}>
                <Grid align='center'>
                    <Avatar style={signupAvatarStyle}>

                    </Avatar>
                    <h2 style={signupHeaderStyle} className='signupFormHeader'>Sign Up</h2>
                </Grid>
                <form className='signupForm'>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">User Role</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="admin"
                            name="radio-buttons-group"
                            style={{ display: 'initial' }}
                        >
                            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                            <FormControlLabel value="student" control={<Radio />} label="Student" />
                            <FormControlLabel value="staff" control={<Radio />} label="Staff" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Name' id="standard-basic" variant="standard" required></TextField>
                    <TextField fullWidth label='Email' id="standard-basic" variant="standard" required></TextField>
                    <TextField fullWidth label='Phone Number' id="standard-basic" variant="standard" required></TextField>
                    <TextField fullWidth label='Password' id="standard-basic" variant="standard" type="password" required></TextField>
                    <TextField fullWidth label='Confirm Password' id="standard-basic" variant="standard" type="password" required></TextField>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="I accept to the terms and conditions" />
                    </FormGroup>
                    <Button style={signupButtonStyle} type='submit' variant="contained" color='primary' fullWidth>Sign up</Button>
                    <Typography align='center'> Already have an account
                        <Link onClick={() => handleChange("event", 0)} className='signupLink'>
                            Sign In
                        </Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    )
};

export default signup;