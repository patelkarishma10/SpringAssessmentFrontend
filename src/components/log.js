import React, { Component } from 'react';

export class Log extends Component {
    render(props) {

        const {
    name
} = this.props

        return (

            <tr>
                <td>{this.props.userId}</td>
                <td>{name}</td>
                <td>{this.props.searchTerm}</td>
                <td>{this.props.date}</td>
            </tr>


        );
    }
}