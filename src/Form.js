import React, { Component } from 'react';
import './Form.css';
import lodash from 'lodash';
import db from './lib/api.js';

export default class Form extends Component {
  constructor(props) {
   super(props);
   this.state = {data: []}

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    return this.setState({data: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    return db.writeRepoData(event);
  }

  // componentWillMount() {
  //   var field = document.getElementsByClassName('entry')[0];
  //   field.reset();
  //   return;
  // }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    db.fetchAllRepoData().then((res) => this.setState({data: lodash.values(res)}))
  }

 render() {
   console.log(this.state);
   console.log(lodash.values(this.state.data));
   return (
     <section>
      <div className="inputRow">
        <i className="arrow down"></i><input type="text" placeholder="What needs to be done?" onChange={this.handleChange} className="inputSection" />
        <button type="submit" onClick={this.handleSubmit} className="addBtn">Add</button>
      </div>
      <div className="entriesRow">
        <ul className="entryContain">
          {this.state.data.map((x) => (<li className="entry">{x}</li>))}
        </ul>
      </div>
    </section>
   );
 }
}

// this.state.data.map((x) => {
// <li className="entry">{x}</li>
// })

// object.each((x, key) => x[key])
