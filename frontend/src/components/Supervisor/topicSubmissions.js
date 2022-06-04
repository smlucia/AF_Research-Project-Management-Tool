import React from 'react';
import '../../styles/admin/AdminNavBar.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@mui/material/Switch';

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

const apiURL = "http://localhost:6005/supervisor/topicSubmissions";


const AcceptTopic = () => {
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
            <div style={{
                background: "linear-gradient(to top right, #009999 -15%, #ffffff 100%)",
                height:700
            }}>
                  
                <div>
                <nav style={{
                  backgroundColor:"#778899",
                  
                }}>
                    <div className="logo">Student Research Topics Checking</div>
                </nav>
                
                </div>

            {/* create a table */}
            <Paper className={styles.root} style={{marginTop:'50px', marginLeft:"100px", marginRight:"200px"}}>
                <Table className={styles.table} style={{ width: 1075 }}>
                    <TableHead>
                        <TableRow style={{ backgroundColor:"#C0C0C0" }}>
                            <TableCell align="right"><b>Group ID</b></TableCell>
                            <TableCell align="right"><b>Research Topic</b></TableCell>
                            <TableCell align="right"><b>Approved</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => {
                            let id = row._id;
                            return (
                                <TableRow style={{ backgroundColor:"#F5F5F5"}}>
                                    <TableCell align="right">{row.groupId}</TableCell>
                                    <TableCell align="right">{row.researchTopic}</TableCell>
                                    {/* add a toggle button to a cell */}
                                    <TableCell align="right">
                                        {/* put a switch accodrong to row.topicRequestStatus */}
                                        <Switch
                                            checked={row.topicRequestStatus}
                                            onChange={() => {
                                                setData(data.map(row => {
                                                    if (id === row._id) {
                                                        row.topicRequestStatus = !row.topicRequestStatus;
                                                    }
                                                    return row;
                                                }));

                                                // update the topicRequestStatus in the database
                                                fetch(apiURL + "/" + id, {
                                                    method: "PUT",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: JSON.stringify({
                                                        topicRequestStatus: row.topicRequestStatus
                                                    })
                                                })
                                                    .then(res => res.json())
                                                    .then(json => console.log(json))
                                                    .catch(err => console.log(err));

                                            }}
                                            value="checked"
                                            inputProps={label}
                                        />
                                    </TableCell>
                                    
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>  </Paper>
          
            </div>
        );
}

export default AcceptTopic;