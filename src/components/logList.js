import React, { Component } from 'react';
import { Table } from "reactstrap";

import { Log } from './log';

export class LogList extends Component {

    render() {

        return (
            <div className="formDiv">
                <h2>Search Log</h2>
                <Table >
                    <tbody>
                        <tr>
                            <th>User id</th>
                            <th>Name</th>
                            <th>Search term</th>
                            <th>Date</th>
                        </tr>

                        {this.props.dataSent.map((item) => (

                            <Log key={item._id}
                                
                                name={item.name}
                                userId={item.userId} 
                                date={item.date}
                                searchTerm={item.searchTerm}/>

                        ))}

                    </tbody>
                </Table>
            </div>

        );
    }
}