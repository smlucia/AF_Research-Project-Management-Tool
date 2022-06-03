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

let id = 0;
function createData(groupId, leaderEmail, researchTopic, academicYear, approved, selected) {
  id += 1;
  return { id, groupId, leaderEmail, researchTopic, academicYear, approved };
}

const rows = [
  createData('SE3060_WD_01', 'kawshi@gmail.com', "Automobile", 4, "True", false),
  createData('SE3060_WD_01', 'kawshi@gmail.com', "Automobile", 4, "True", false),
  createData('SE3060_WD_01', 'kawshi@gmail.com', "Automobile", 4, "True", false),

];


const ApproveResearch = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
        return (
            <>
                <div>
                    <nav>
                        <div className="logo">Approve Research Topics</div>
                    </nav>
                
                </div>

            {/* create a table */}
            <Paper className={styles.root}>
                <Table className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Group ID</TableCell>
                            <TableCell align="right">Leader Email</TableCell>
                            <TableCell align="right">Research Topic</TableCell>
                            <TableCell align="right">Academic Year</TableCell>
                            <TableCell align="right">Approved</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell align="right">{row.groupId}</TableCell>
                                    <TableCell align="right">{row.leaderEmail}</TableCell>
                                    <TableCell align="right">{row.researchTopic}</TableCell>
                                    <TableCell align="right">{row.academicYear}</TableCell>
                                    <TableCell align="right">{row.approved}</TableCell>
                                    {/* add a toggle button to a cell */}
                                    <TableCell align="right">
                                        <Switch {...label} defaultChecked />
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