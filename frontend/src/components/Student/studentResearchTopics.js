import React, { useState } from 'react';
import axios from "axios";
import "../../styles/student/studentResearchTopic.css";
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


const studentResearchTopics = () => {
    // return (
    //     <div> Inside Research Topic </div>
    // );
    const handleStudentDashboard = () => {
        localStorage.removeItem("token");
        window.location = "/studentDashboard";
    };

    //interface modifications
    const paperStyle = { margin: "20px auto", width: 900 }

    const [data, setData] = useState({
        groupId: "",
        leaderEmail: "",
        researchTopic: "",
        academicYear: "",
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

    const handleResearchTopicSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:6005/researchTopicReg";
            const { data: res } = await axios.post(url, data);
            navigate("/studentDashboard");
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

    return (
        <div className="studentResearchTopic">
            <nav className="studentResearchTopic-nav-bar">
                <h1></h1>
                <button
                    className={styles.white_btn}
                    onClick={handleStudentDashboard}
                    variant="text">
                    DASHBOARD
                </button>
            </nav>

            <Paper elevation={5} style={paperStyle}>
                <Card sx={{ display: 'flex', marginTop: 10 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5" align='center'>
                                REGISTER RESEARCH TOPIC
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    width: 400,
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

                                <TextField
                                    id="outlined-basic"
                                    label="Research Topic"
                                    variant="outlined"
                                    fullWidth
                                    name='researchTopic'
                                    onChange={handleChange}
                                    value={data.researchTopic}
                                    required />

                                <TextField
                                    id="outlined-basic"
                                    label="Academic Year"
                                    variant="outlined"
                                    fullWidth
                                    name='academicYear'
                                    onChange={handleChange}
                                    value={data.academicYear}
                                    required />
                                {error && <div className="error_msg">{error}</div>}
                                <Button variant="contained" fullWidth onClick={handleResearchTopicSubmit}>SUBMIT</Button>

                            </Box>

                        </CardContent>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 500 }}
                        marginLeft="0"
                        image="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/08/11195303/research-project.jpg"
                        alt="Live from space album cover"
                    />
                </Card>
            </Paper>
        </div>
    );
};

export default studentResearchTopics;