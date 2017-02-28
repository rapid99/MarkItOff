import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
import Footer from './Footer.js'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Mark It Off</h2>
        </div>
        <div className="App-intro">
          <Form />
        </div>
        <div className="foot">
          <Footer />
        </div>
      </div>
    );
  }
}
