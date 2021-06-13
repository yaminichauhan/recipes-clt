import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

export default class Users extends Component {

    constructor() {
        super();
        this.state = {
            data: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:8585/api/users/getAll', {
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json",
                "access-control-allow-origin": "*"
            },
            "mode": "cors",
        })
            .then(resp => {
                return resp.json()
            })
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        const usersList = this.state.data;
        const keys = usersList ? Object.keys(usersList[0]) : null;
        return (
            <div>
                <h1>Users</h1>
                {usersList && <Paper>
                    <Table>
                        {
                            <TableHead>{
                                keys.map(key => {
                                    return <TableCell align="left">{key.toUpperCase()}</TableCell>
                                })
                            }</TableHead>
                        }
                            <TableBody>
                        {
                            usersList.map(student => {
                                const values = Object.values(student);
                                return <TableRow> {values.map(value => {
                                    return <TableCell align="left">{value}</TableCell>
                                })} </TableRow>
                            })
                        }
                            </TableBody>
                    </Table>
                </Paper>
                }
            </div>
        );
    }
}