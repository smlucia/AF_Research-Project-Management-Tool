import React, { useState } from 'react';
import axios from "axios";
import "../../styles/student/studentReqSupervisor.css";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Main/styles.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SaveIcon from '@material-ui/core/Icon';


const studentRequestSupervisor = () => {

    //interface modifications
    const paperStyle = { margin: "20px auto", width: 900 }

    const [data, setData] = useState({
        groupId: "",
        leaderEmail: "",
        //supervisorType: "",
        supervisorName: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSuccessAlert = () => {
        return (
            <Alert severity="success" color="info">
                This is a success alert — check it out!
            </Alert>
        );
    }

    //handle send request button
    const handleSupervisorRequest = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:6005/requestSupervisor";
            const { data: res } = await axios.post(url, data);
            navigate("/studentHomePage");
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    //handle supervisor type 
    // const getInitialState = () => {
    //     const type = "supervisor";
    //     return type;
    // };

    const [type, setType] = useState();

    const handleSupervisorTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleStudentDashboard = () => {
        localStorage.removeItem("token");
        window.location = "/studentHomePage";
    };

    const handleHome = () => {
        localStorage.removeItem("token");
        window.location = "/home";
    };

    return (
        <div className="requestSupervisor">
            <nav className={styles.navbar}>
                <h1></h1>
                <button
                    className={styles.home_btn}
                    onClick={handleHome}
                    variant="text">
                    HOME
                </button>
                <button
                    className={styles.white_btn}
                    onClick={handleStudentDashboard}
                    variant="text">
                    DASHBOARD
                </button>
            </nav>

            <Paper elevation={5} style={paperStyle}>
                <Card sx={{ display: 'flex', marginTop: 7 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5" align='center'>
                                REQUEST SUPERVISOR
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    width: 300,
                                    '& > :not(style)': { m: 1 },
                                }}
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="Group ID"
                                    variant="outlined"
                                    fullWidth
                                    name='groupId'
                                    onChange={handleChange}
                                    value={data.groupId}
                                    required />

                                <TextField
                                    id="outlined-basic"
                                    label="Leader Email"
                                    variant="outlined"
                                    fullWidth
                                    name='leaderEmail'
                                    onChange={handleChange}
                                    value={data.leaderEmail}
                                    required />

                                {/* <TextField
                                    id="outlined-basic"
                                    label="Supervisor Type"
                                    variant="outlined"
                                    fullWidth
                                    name='supervisorType'
                                    onChange={handleChange}
                                    value={data.supervisorType}
                                    required /> */}

                                <FormControl sx={{ m: 1, minWidth: 300 }}>
                                    <InputLabel id="demo-simple-select-autowidth-label">Supervisor Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={type}
                                        name='supervisorType'
                                        onChange={handleSupervisorTypeChange}
                                        autoWidth
                                        label="Supervisor Type"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Supervisor'}>Supervisor</MenuItem>
                                        <MenuItem value={'Co-Supervisor'}>Co-Supervisor</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    id="outlined-basic"
                                    label="Supervisor Name"
                                    variant="outlined"
                                    fullWidth
                                    name='supervisorName'
                                    onChange={handleChange}
                                    value={data.supervisorName}
                                    required />

                                {error && <div className="error_msg">{error}</div>}
                                <Button
                                    variant="contained"
                                    fullWidth
                                    endIcon={<SaveIcon/>}
                                    onClick={handleSupervisorRequest}>
                                    SEND REQUEST
                                </Button>

                            </Box>

                        </CardContent>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 600 }}
                        marginLeft="0"
                        image="https://breezeblog.s3.amazonaws.com/9/virtual_meeting.jpg"
                        alt="Live from space album cover"
                    />
                </Card>
            </Paper>
        </div>
    );
};

export default studentRequestSupervisor;