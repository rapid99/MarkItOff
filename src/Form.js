import React, { Component } from 'react';
import Todo from "./Todos";
import './Form.css';
import db from './lib/api.js';

export default class Form extends Component {
  constructor(props) {
   super(props);
   this.state = {data: [], input: ""};


   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchData()
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    db.writeRepoData(this.state.input).then((success) => {
      this.setState({input: ""});
      db.fetchAllRepoData().then((res) => this.setState({data: res}))
    });
  }

  fetchData() {
    db.fetchAllRepoData().then((res) => this.setState({data: res}))
  }

 render() {
   const {data, input} = this.state;

   return (
     <section>
      <div className="inputRow">
        <i className="arrow down"></i><input value={input} type="text" placeholder="What needs to be done?" onChange={this.handleChange} className="inputSection" />
        <button type="submit" onClick={this.handleSubmit} className="addBtn">Add</button>
      </div>
      <div className="entriesRow">
        <ul className="entryContain">
          {data.map((x) => (
            <li style={{listStyle: 'none'}} key={x}><Todo todo={x} /></li>
          ))}
        </ul>
      </div>
    </section>
   );
 }
}
