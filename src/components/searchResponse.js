import React, { Component } from 'react';

export class SearchResponse extends Component {
    render(props) {
        return (
            <tbody>
                <tr><td>{this.props.responseData.message}</td></tr>
                <tr><td>Height: {this.props.responseData.height}</td></tr>
            </tbody>
        );
    }
}