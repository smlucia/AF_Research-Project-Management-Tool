import React from 'react';
import '../../styles/admin/AdminNavBar.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

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

const apiURL = "http://localhost:6005/panel-member/research-topics";


const ApproveResearch = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    // get the data from the api
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch(apiURL)
            .then(res => res.json())
            .then(json => setData(json))
            .catch(err => console.log(err));
    }, []);

    const handleLogout = () => {
		localStorage.removeItem("token");
        window.location = "/";
	};

        return (
            <>
                <div>
                    <nav>
                        <div className="logo">Approve Research Topics</div>
                        <Button 
                            className={styles.white_btn} 
                            onClick={handleLogout}
                            variant="text">
                            Logout
                        </Button>
                    </nav>
                
                </div>

            {/* create a table */}
            <Paper className={styles.root}>
                <Table className={styles.table} style={{ width: 1200 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Group ID</TableCell>
                            <TableCell align="right">Research Topic</TableCell>
                            <TableCell align="right">Approved</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(row => {
                            let id = row._id;
                            return (
                                <TableRow>
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
                                            value="checkedA"
                                            inputProps={label}
                                        />
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

export default ApproveResearch;