import React, {Component} from "react";
import './Todos.css';

class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = {not_done: true};

    this.deleteToDo = this.deleteToDo.bind(this);
  }

  deleteToDo() {
    this.setState(x => ({
      not_done: !x.not_done
    }));


  }

  render() {
    const {todo} = this.props;

    return (
      <p className="entry"><span className="delete" onClick={this.deleteToDo}>{this.state.not_done ? <span style={{color: 'rgba(240, 0, 0, 0.8)'}}>I need to: </span> : <span style={{color: 'green'}}>I completed: </span> }</span>{todo}</p>
    );
  }
}


export default Todos;
