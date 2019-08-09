import React, { Component } from 'react';
import axios from "axios";
import { Table } from "reactstrap";

import { SearchResponse } from './searchResponse';

export class Search extends Component {


    constructor() {
        super();
        this.state = {
            message: "",
            responseData: ""
        };
    }

    search = (e) => {
        e.preventDefault();
        let userId = e.target[0].value;
        let searchTerm = e.target[1].value;
        if (userId === "" || searchTerm === "") {
            this.setState({ message: "Please fill all fields" })
        } else {
            axios
                .get("http://localhost:8080/user/search/" + userId + "/" + searchTerm)
                .then(response => {
                   this.setState({
                    responseData: (response.data)
                });
                    this.props.passedFunction();
                })
                .catch(err => { this.setState({ message: "username not found" }); });

        }
    }

    render() {

        return (
            <div className="formDiv">
                <h1>Search </h1>
                <form onSubmit={this.search}>
                    <label htmlFor="userId">Enter you User Id: </label>
                    <input type="text" id="userId" className="form-control" />
                    <br />

                    <label htmlFor="searchTerm" >Enter what you would like to search for: </label>
                    <input type="searchTerm" id="searchTerm" className="form-control" />
                    <br />

                    <input type="submit" className="btn btn-dark" value="search" />
                </form>

                <p style={{ color: 'red' }}>{this.state.message}</p>

                <Table>
                    <SearchResponse responseData={this.state.responseData} />
                </Table>
            </div>

        );
    }
}