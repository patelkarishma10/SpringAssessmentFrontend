import React, { Component } from 'react';
import axios from "axios";
import { Table } from "reactstrap";


export class Register extends Component {

    constructor() {
        super();
        this.state = {
            responseData: ""
        };
    }

    register = (e) => {
        e.preventDefault();
        let newItem = {
            name: e.target[0].value,
            memberNumber: e.target[1].value
        }
        if (newItem.name === "" || newItem.memberNumber === "") {
            this.setState({ responseData: "Please fill all fields" })
        } else {
            axios
                .post("http://localhost:8080/user/create", newItem)

                .then(response => {
                    window.alert("Your user id is: " + response.data.id)
                });
        }

    }

    render() {

        return (
            <div className="formDiv">
                <h1>Register</h1>
                <form onSubmit={this.register}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" className="form-control" />
                    <br />

                    <label htmlFor="memberNumber" >Member number: </label>
                    <input type="text" id="memberNumber" className="form-control" />
                    <br />

                    <input type="submit" className="btn btn-dark" value="register" />
                </form>


                <Table style={{ color: 'red' }}>
                    <tbody>
                        <tr>
                            <td>{this.state.responseData}</td>
                        </tr>
                    </tbody>

                </Table>
            </div>

        );
    }
}