import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Register } from './register';
import { Search } from './search';
import {LogList } from './logList';
import { NavBar } from './navBar';

export class RouterComponent extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Route exact path="/" component={Register} />
                    <Route path="/login" render={(props) => <Search passedFunction={this.props.onLoad} />} />
                    <Route path="/logList" render={(props) => <LogList dataSent={this.props.dataSent} />} />
                </Router>
            </div>
        )
    }
}
