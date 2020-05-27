import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    parent: {
        boxShadow: 'none',
    },
    table: {
        minWidth: 650,
    },
    body: {
        borderColor: '#f8f8f8',
    }
});

function UserList(props) {
    const classes = useStyles();

    return (
        <TableContainer className={classes.parent} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.body}>Name</TableCell>
                        <TableCell className={classes.body}></TableCell>
                        <TableCell align="right" className={classes.body}>Age</TableCell>
                        <TableCell align="right" className={classes.body}>Phone</TableCell>
                        <TableCell align="right" className={classes.body}>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((row) => (
                        <TableRow key={row.name.first}>
                            <TableCell component="th" scope="row" className={classes.body}>
                                <Avatar alt={row.name.first} src={row.picture.thumbnail} />
                            </TableCell>
                            <TableCell component="th" scope="row" className={classes.body}>
                                {row.name.first}
                            </TableCell>
                            <TableCell align="right" className={classes.body}>{row.dob.age}</TableCell>
                            <TableCell align="right" className={classes.body}>{row.phone}</TableCell>
                            <TableCell align="right" className={classes.body}>{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default UserList;