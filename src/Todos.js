import React, {Component} from "react";
import './Todos.css';
import db from './lib/railsApi.js';

class Todos extends Component {
  completeTodo = () => {
    const {todo} = this.props;
    event.preventDefault();
    db.updateTodo(todo, "done");
  }

  hideTodo = () => {
    const {todo} = this.props;
    event.preventDefault();
    db.updateTodo(todo, "archived");
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
