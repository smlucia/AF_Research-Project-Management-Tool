import React from 'react';
import '../../styles/admin/AdminNavBar.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ApproveResearch from './approveResearch';
import { Link } from 'react-router-dom';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const PanelMember = () => {
    return (
        <>
           <div>
                <nav>
                    <div className="logo">Panel Member Dashboard</div>
                </nav>
            
            </div>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{
                    <React.Fragment>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Approve Research Topics
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Approve the research topics submitted by the students
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" component={Link} to="/panelmember/approve-research">
                        Proceed
                      </Button>
                    </CardActions>
                  </React.Fragment>
                }</Card>
            </Box>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{
                    <React.Fragment>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Grade Submissions
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Evaluate and grade the submissions of the students
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" component={Link} to="/panelmember/grade">
                        Proceed
                      </Button>
                    </CardActions>
                  </React.Fragment>
                }</Card>
            </Box>
        </>
      );
}

export default PanelMember;