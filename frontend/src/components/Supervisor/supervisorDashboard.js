import React from 'react';
import styles from "../Main/styles.module.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';



const studentDashboard = () => {

    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location="/";
	};
   const topic = () => {
    localStorage.removeItem("token");
    window.location="supervisor";
   };
   const submit = () => {
    localStorage.removeItem("token");
    window.location="/supervisor/researchSubmissions";
   };
   const chat = () => {
    localStorage.removeItem("token");
    window.location="http://localhost:5000/";
   }




    return (
        <div style={{background: "linear-gradient(to top right, #336699 -15%, #ffffff 100%)",height:800}}>
            <nav className={styles.navbar}>
                <h1>Welcome to the Supervisor / Co-supervisor page</h1>
               
                <button
                    className={styles.white_btn}
                    onClick={handleLogout}>
                    LOGOUT
                </button>
               
            </nav>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            <Card variant="outlined" style={{
                     margin:"auto",
                     padding:"1rem",
                     height:"350px",
                     boxShadow:"5px 5px 10px #ccc",
                     alignItems:"left",
                     display:"flex",
                     flexDirection:"column",
                     marginTop:'70px',
                }}>
                    <img src='https://media.istockphoto.com/vectors/online-education-and-home-schooling-related-vector-flat-illustration-vector-id1227219234?k=20&m=1227219234&s=612x612&w=0&h=N76wysvYm-xyfjAY7-kICLTJF5kd2KMyhVH9YhVOYTU='
                    style={{
                        width:'280px',
                        hight:'200px'
                    }}/>
            <button
                    style={{
                        backgroundColor:'#6495ED',
                        padding:'5px',
                        width:'300px',
                        fontSize:'20px',
                        marginTop:'1px',
                        border:"2px solid darkblue"
                        

                    }}
                    className={styles.white_btn}
                    onClick={topic}>
                    Topic-Submissions
                </button >
                </Card>

                <Card variant="outlined" style={{
                     margin:"auto",
                     padding:"1rem",
                     height:"350px",
                     boxShadow:"5px 5px 10px #ccc",
                     alignItems:"left",
                     display:"flex",
                     flexDirection:"column",
                     marginTop:'70px'
                }}>

                <img src='https://img.freepik.com/free-vector/students-study-with-female-teacher-flat-illustration_18660-314.jpg?w=2000'
                style={{
                        width:'280px',
                        hight:'290px'
                    }}/>
                <button
                style={{
                    backgroundColor:'#6495ED',
                    padding:'5px',
                    width:'300px',
                    fontSize:'20px',
                    marginTop:'30px',
                    border:"2px solid darkblue"

                }}
                    className={styles.white_btn}
                    onClick={submit}>
                   
                    Research-Submissions
                </button></Card>

                <Card variant="outlined" style={{
                     margin:"auto",
                     padding:"1rem",
                     height:"350px",
                     boxShadow:"5px 5px 10px #ccc",
                     alignItems:"left",
                     display:"flex",
                     flexDirection:"column",
                     marginTop:'70px'
                }}>

            <img src='http://unblast.com/wp-content/uploads/2020/05/Group-Chat-Illustration.jpg'
             style={{
                        width:'280px',
                        hight:'340px'
                    }}/>
                <button
                style={{
                    backgroundColor:'#6495ED',
                    padding:'5px',
                    width:'300px',
                    fontSize:'20px',
                    marginTop:'55px',
                    border:"2px solid darkblue"

                }}
                    className={styles.white_btn}
                    onClick={chat}>
                  
                    Group-Chat
                </button></Card>
            </Box>
        </div>
    );

}
export default studentDashboard;