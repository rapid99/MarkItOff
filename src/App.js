import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
import Footer from './Footer.js'
import db from './lib/api.js';


export default class App extends Component {
  constructor(props) {
   super(props);
   this.state = {data: [] }
 }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    db.fetchAllRepoData().then((res) => this.setState({data: res}))
  }

  writeTodo(todo) {
    db.writeRepoData(todo).then((input) => {
      this.setState({input: ""});
      db.fetchAllRepoData().then((res) => this.setState({data: res}))
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Mark It Off</h2>
        </div>
        <div className="App-intro">
          <Form onWriteTodo={this.writeTodo} data={this.state.data} />
        </div>
        <div className="foot">
          <Footer todoCount={this.state.data.length} />
        </div>
      </div>
    );
  }
}
