import React from 'react';
import '../../styles/admin/AdminNavBar.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@mui/material';



const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const apiURL = "http://localhost:6005/supervisor/researchSubmissions";


const Marking = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    // get the data from the api
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch(apiURL)
            .then(res => res.json())
            .then(json => setData(json))
            .catch(err => console.log(err));
    }, []);

        return (
            <>
                <div>
                <nav style={{
                  backgroundColor:"#778899",
                  
                }}>
                    <div className="logo">Student Research Project Evaluate</div>
                </nav>
                
                </div>

            {/* create a table */}
            <Paper className={styles.root} style={{marginTop:'50px', marginLeft:"100px", marginRight:"70px"}}>
                <Table className={styles.table} style={{ width: 1200 }}>
                    <TableHead style={{ backgroundColor:"#C0C0C0" }}>
                        <TableRow>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Deadline</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Marks</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody  style={{ backgroundColor:"#F5F5F5"}}>
                        {data.map(row => {
                            let id = row._id;
                            return (
                                <TableRow>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.deadline}</TableCell>
                                    <TableCell align="right">{row.type}</TableCell>
                               
                                <TableCell align="right">
                                       
                                        <TextField/>
                                    </TableCell>
                                    
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
            </>
        );
}

export default  Marking;