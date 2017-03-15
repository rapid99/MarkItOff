import React, {Component} from "react";
import './Todos.css';
import db from './lib/railsApi.js';

class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = {not_done: true, hide_todo: false};

    this.completeToDo = this.completeToDo.bind(this);
    this.hideTodo = this.hideTodo.bind(this);
  }

  completeToDo() {
    this.setState(todo => ({
      not_done: !todo.not_done
    }))
  }

  hideTodo() {
    this.setState(todo => ({
      hide_todo: !todo.hide_todo
    }))
    if (confirm("Are you sure you want to archive this Todo?")) {
      db.updateTodo(this);
    }
  }

  render() {
    const {todo} = this.props;
    const completionStatus = this.state.not_done ?
      <span style={{color: 'rgba(230, 0, 0, 0.8)'}}>I need to: </span>
      : <span style={{color: 'green'}}>I completed: </span>;


    return (
      <div>
        <p className="entry">
          <span className="comp" onClick={this.completeToDo}>{completionStatus}</span>{todo.data}
          <span className="deleteX" onClick={this.hideTodo}> &#120;</span>
        </p>
      </div>
    );
  }
}


export default Todos;
