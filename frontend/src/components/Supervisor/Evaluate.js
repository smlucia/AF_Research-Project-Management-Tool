import React from 'react';
import '../../styles/admin/AdminNavBar.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
     
      
    </Box>
  );
  const styles = {
    paperContainer: {
      background: "linear-gradient(to top right, #336699 -15%, #ffffff 100%)",
        height:800,
        
        marginTop:0
    }
};
const Supervisor = () => {
 
    return (
        <><Paper style={styles.paperContainer}>
           <div>
                <nav style={{
                  backgroundColor:"#778899",
                  height:"100px"
                }}>
                    <div className="logo">Student Research Topics Submissions</div>
                </nav>
            
            </div>
            
            <Box sx={{ minWidth: 275 }} >
                <Card  style={{
                     margin:"auto",
                     padding:"1rem",
                     height:"350px",
                     boxShadow:"5px 5px 10px #ccc",
                     alignItems:"left",
                     display:"flex",
                     flexDirection:"column",
                     marginTop:'90px',
                     width:"400px",
                     border:"3px solid #ADD8E6",
                     borderRadius:'7px',
                     backgroundColor:"#E6E6FA",
                    
                }}>
                  {
                    <React.Fragment>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        <h1 style={{ textAlign: 'center'}}>Check Submitted Topics</h1>
                      

                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <br/>Approve or decline the research topics submitted by the students
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button   variant="contained"  component={Link} to="/supervisor/topicSubmissions"
                      style={{
                        backgroundColor:"#008080",
                        width:"100%",
                        height:"50px",
                        
                      }}> 
                      <br/>Checkout
                      </Button>
                    </CardActions>
                  </React.Fragment>
                }</Card>
            </Box>
            </Paper>
        </>
      );
            
}

export default Supervisor;