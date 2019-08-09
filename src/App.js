import React, { Component } from 'react';
import axios from "axios";

import './App.css';
import { RouterComponent } from './components/router';

export class App extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  onLoad = () => {
    axios
      .get("http://localhost:8088/logs/getAll")
      .then(response => {
        this.setState({
          data: response.data
          
        });
      })
  }


  componentDidMount() {
    this.onLoad();

  }


  render() {
    return (
      <div>
        <RouterComponent onLoad={this.onLoad} dataSent={this.state.data} />

      </div>
    );
  }


}

export default App;
