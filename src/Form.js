import React, { Component } from 'react';
import Todo from "./Todos";
import './Form.css';

export default class Form extends Component {
  constructor(props) {
   super(props);
   this.state = {input: ""};


   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    this.setState({input: ""});
    event.preventDefault();
    this.props.onWriteTodo(this.state.input);
  }



 render() {
   const {input} = this.state;
   const {data} = this.props;

   return (
     <section>
      <div className="inputRow">
        <i className="arrow down"></i><input value={input} type="text" placeholder="What needs to be done?" onChange={this.handleChange} className="inputSection" />
        <button type="submit" onClick={this.handleSubmit} className="addBtn">Add</button>
      </div>
      <div className="entriesRow">
        <ul className="entryContain">
          {data.map((x) => (
            <li style={{listStyle: 'none'}} key={x.data} className="listItem"><Todo todo={x} /></li>
          ))}
        </ul>
      </div>
    </section>
   );
 }
}
