import React, { Component } from 'react';

class Table extends Component {
    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
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
            </table>
        );
    }
}

export default Table 