import React from 'react';
import '../../styles/admin/AdminNavBar.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ApproveResearch from './approveResearch';
import { Link } from 'react-router-dom';

// create data function
let id = 0;
function createData(topic, createdAt, updatedAt, feedback, grade) {
    id += 1;
    return { id, topic, createdAt, updatedAt, feedback, grade };
}

const rows = [
    createData('AF', '10-6-2022', '10-6-2022', '', ''),
    createData('React', '10-6-2022', '10-6-2022', '', ''),
    createData('Loadium', '10-6-2022', '10-6-2022', '', ''),
];

const grades = ['A', 'B', 'C', 'D', 'E'];

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const apiURL = "http://localhost:6005/panel-member/submitted-documents";

const Grade = () => {
    const handleLogout = () => {
		localStorage.removeItem("token");
		// set path to signin
        window.location = "/";
	};

    // get the data from the api
    // const [data, setData] = React.useState([]);
    // React.useEffect(() => {
    //     fetch(apiURL)
    //         .then(res => res.json())
    //         .then(json => setData(json))
    //         .catch(err => console.log(err));
    // }, []);

    // console.log(data);

        return (
            <>
                <div>
                    <nav>
                        <div className="logo">Grade Submissions</div>
                        <Button 
                            onClick={handleLogout}
                            variant="text">
                            Logout
                        </Button>
                    </nav>
                
                </div>
                
                {/* create a card for each row in rows */}
                <div className="card-container">
                    {rows.map(row => {
                        return (
                            <Box sx={{ minWidth: 275 }}>
                                <Card variant="outlined">{
                                    <React.Fragment>
                                    <CardContent>
                                    <Typography variant="h5" component="div">
                                        Topic Name: {row.topic}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Created At: {row.createdAt}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Updated At: {row.updatedAt}
                                    </Typography>
                                    {/* put a select item for grade */}
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Grade:
                                        <select
                                            onChange={
                                                // change the grade of the row
                                                (e) => {
                                                    row.grade = e.target.value;
                                                    console.log(e.target.value);
                                                }
                                            }
                                        >
                                            {/* set the default value to row.grade */}
                                            <option value={row.grade}>{row.grade}</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                            <option value="E">E</option>
                                        </select>
                                    </Typography>
                                    </CardContent>
                                    <CardActions>
                                    {/* <Button 
                                        size="small" 
                                        component={Link} to="/panelmember/approve-research">
                                        Submit
                                    </Button> */}
                                    </CardActions>
                                </React.Fragment>
                                }</Card>
                            </Box>
                        );
                    }
                    )}

                </div>
            </>

        );
}

export default Grade;