import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Scarlett</td>
                <td>Actress</td>
            </tr>
            <tr>
                <td>Aneel</td>
                <td>Developer</td>
            </tr>
        </tbody>
    );
}

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}

export default Table 