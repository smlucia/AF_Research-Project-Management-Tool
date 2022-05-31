import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from '../components/Login';
import Signup from '../components/Signup';

const loginAndSignup = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const loginAndSignupStyle = {width:350, margin:"20px auto"}
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <Paper elevation={20} style={loginAndSignupStyle}>
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
            <Tab label="Sign In" />
            <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}>
                <Login handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Signup handleChange={handleChange}/>
            </TabPanel>
        </Paper>
    );
};

export default loginAndSignup;