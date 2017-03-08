import React, {Component} from "react";
import './Todos.css';

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
  //need to find a better tag to apply the hide function to
  //so it hides the entire row
  hideTodo() {
    this.setState(todo => ({
      hide_todo: !todo.hide_todo
    }))
    const element = document.getElementsByClassName('listItem')[0];
    if (this.state.hide_todo) {
      element.className = "hideTheTodo";
    } else {
      element.className = "showTheTodo";
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
          <span className="comp" onClick={this.completeToDo}>{completionStatus}</span>{todo}  <span className="deleteX" onClick={this.hideTodo}> &#120;</span>
        </p>
      </div>
    );
  }
}


export default Todos;
