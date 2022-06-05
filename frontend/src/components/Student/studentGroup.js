import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/student/studentReqSupervisor.css";
import styles from "../Main/styles.module.css";
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
//import AllPanels from './DisplayPanel';

export default function addStudentGroup() {
    const [groupId, setGroupId] = useState("");
    const [groupName, setGroupName] = useState("");
    const [leaderName, setLeaderName] = useState("");
    const [leaderEmail, setLeaderEmail] = useState("");
    const [otherMembers, setOtherMembers] = useState([]);


    const navigate = useNavigate();

    async function addStudentGroup() {
        let item = {
            groupId,
            groupName,
            leaderName,
            leaderEmail,
            otherMembers
        };

        await fetch("http://localhost:6005/studentGroup", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        window.alert(`New group created successfully!`);
        navigate.push("/");
        //   window.location.reload();
    }

    const handleStudentDashboard = () => {
        localStorage.removeItem("token");
        window.location = "/studentHomePage";
    };

    const handleHome = () => {
        localStorage.removeItem("token");
        window.location = "/home";
    };

    const paperStyle = { marginLeft: 180, width: 1000, marginTop: -80 }

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
            <Paper elevation={10} style={paperStyle}>
                <Card sx={{ display: 'flex', marginTop: 15 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <h2 style={{ textAlign: "center", margin: "40px auto", }}>CREATE NEW STUDENT GROUP</h2>
                            {/* <div style={{
                width: "700px",
                margin: "30px auto",

            }}> */}
                            <label htmlFor="groupID" style={{ fontSize: "20px", color: "black" }}>Group ID: </label>
                            <input
                                type="text"
                                onChange={e => setGroupId(e.target.value)}
                                className="form-control"
                                placeholder="Group ID"
                            />
                            <br />

                            <label htmlFor="groupName" style={{ fontSize: "20px", color: "black" }}>Group Name: </label>
                            <input
                                type="text"
                                onChange={e => setGroupName(e.target.value)}
                                className="form-control"
                                placeholder="Group Name"
                            />
                            <br />

                            <label htmlFor="leaderName" style={{ fontSize: "20px", color: "black" }}>Leader Name: </label>
                            <input
                                type="text"
                                onChange={e => setLeaderName(e.target.value)}
                                className="form-control"
                                placeholder="Leader Name"
                            />
                            <br />

                            <label htmlFor="leaderEmail" style={{ fontSize: "20px", color: "black" }}>Leader Email: </label>
                            <input
                                type="text"
                                onChange={e => setLeaderEmail(e.target.value)}
                                className="form-control"
                                placeholder="Leader Email"
                            />
                            <br />

                            <label htmlFor="otherMembers" style={{ fontSize: "20px", color: "black" }}>Other Members: </label>
                            <input
                                type="text"
                                //parse the string input
                                onChange={e => setOtherMembers(JSON.parse(e.target.value))}
                                className="form-control"
                                //notice the array bracket '[' and ']'
                                placeholder='[{"name": "", "email": ""}, {"name": "", "email": ""}]'
                            />

                            <br />

                            <button
                                onClick={addStudentGroup}
                                className="btn btn-primary"
                                style={{
                                    backgroundColor: 'darkblue',
                                    border: 0,
                                    width: 200,
                                    marginLeft: 110
                                }}>
                                CREATE GROUP
                            </button>
                            {/* </div> */}

                            {/* <AllPanels/> */}
                        </CardContent>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 515 }}
                        marginLeft="0"
                        image="https://st2.depositphotos.com/1763191/12379/v/950/depositphotos_123793510-stock-illustration-lots-of-children-reading-and.jpg"
                        alt="Live from space album cover"
                    />
                </Card>
            </Paper>
        </div>
    );
}
