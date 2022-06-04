import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/student/studentResearchTopic.css";
import styles from "../Main/styles.module.css";
import ResearchNavbar from './studentResearchNavBar';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Record = (props) => (

    <tr>
        <td style={{ fontSize: "17px" }}>{props.record.groupId}</td>
        <td style={{ fontSize: "17px" }}>{props.record.researchTopic}</td>

        <td>
            <Link
                className="btn btn-primary"
                style={{
                    padding: "6px 25px",
                    fontSize: "17px",
                    backgroundColor: "green",
                    marginRight: "6px",
                    border: 0
                }}
                to={`/studentResearchTopicEdit/${props.record._id}`}>
                EDIT
            </Link>

            <button
                className="btn btn-primary"
                style={{
                    padding: "6px 25px",
                    fontSize: "17px",
                    backgroundColor: "red",
                    marginRight: "6px",
                    border: 0
                }}
                onClick={() => {
                    props.deleteRecord(props.record._id);
                }}>
                DELETE
            </button>

            {/* <Link className="btn btn-primary" style={{ padding: "6px 25px", fontSize: "17px", marginRight: "6px" }} to={`/userview/${props.record._id}`}>VIEW</Link> */}
        </td>
    </tr>
);

export default function RecordList() {
    const [records, setRecords] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:6005/researchTopicReg/getAllResearchTopics?`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setRecords(records);
        }

        getRecords();

        return;
    }, [records.length]);

    // This method will delete a record
    async function deleteRecord(id) {
        await fetch(`http://localhost:6005/researchTopicReg/deleteOneResearchTopic/${id}`, {
            method: "DELETE"
        });

        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);
    }

    // This method will map out the records on the table
    function recordList() {
        return records.map((record) => {
            return (
                <Record
                    record={record}
                    deleteRecord={() => deleteRecord(record._id)}
                    key={record._id}
                />
            );
        });
    }

    const handleStudentDashboard = () => {
        localStorage.removeItem("token");
        window.location = "/studentHomePage";
    };

    const handleHome = () => {
        localStorage.removeItem("token");
        window.location = "/home";
    };

    const handleResearchReg = () => {
        localStorage.removeItem("token");
        window.location = "/studentResearchTopics";
    };

    const handleManageResearch = () => {
        localStorage.removeItem("token");
        window.location = "/studentHandleResearchTopic";
    };

    // This following section will display the table with the records of individuals.
    return (

        <div style={{
            backgroundImage:
                "url('https://t3.ftcdn.net/jpg/05/00/34/58/360_F_500345899_4OqmtspFst6SRnNQvLj7h7TfKOrBwTer.jpg')",
            height: "auto",
            position: "absolute",
            left: "0",
            width: "100%",
            overflow: "hidden"

        }}>
            {/* <ResearchNavbar /> */}
            <nav className="studentResearchTopic-nav-bar">
                <h1></h1>
                <button
                    className={styles.handleResearchHome_btn}
                    onClick={handleHome}
                    variant="text">
                    HOME
                </button>
                <button
                    className={styles.handleResearchDash_btn}
                    onClick={handleStudentDashboard}
                    variant="text">
                    DASHBOARD
                </button>
                <button
                    className={styles.researchReg_btn}
                    onClick={handleResearchReg}
                    variant="text">
                    REGISTER RESEARCH TOPIC
                </button>
                <button
                    className={styles.manageResearch_btn}
                    onClick={handleManageResearch}
                    variant="text">
                    MANAGE RESEARCH TOPIC
                </button>
            </nav>

            <div style={{
                width: "70%",
                margin: "80px auto",

            }}>

                <h2
                    style={{
                        textAlign: "center",
                        margin: "30px auto",
                        fontSize: "40px",
                        //color: 'darkblue'
                    }}>
                    REGISTERED RESEARCH TOPIC LIST
                </h2>

                <Paper elevation={15}>
                    <Card sx={{ maxWidth: 1000 }} style={{ marginRight: 0 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://eduvoice.in/wp-content/uploads/2019/12/Research-paper.png"
                                alt="research"
                            />
                            <CardContent>
                                <table className="table table-striped" style={{
                                    marginTop: 20,
                                    borderWidth: "1px",
                                    borderColor: "black",
                                    borderStyle: 'solid',
                                    backgroundColor: "white"
                                }}>
                                    <thead>
                                        <tr style={{ backgroundColor: "#BFD7ED" }}>
                                            <th style={{ fontSize: "20px" }}>Group ID</th>
                                            <th style={{ fontSize: "20px" }}>Research Topic</th>
                                            <th style={{ fontSize: "20px" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>{recordList()}</tbody>
                                </table>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Paper>
            </div>
        </div>
    );
}