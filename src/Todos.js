import React, {Component} from "react";

class Todos extends Component {
  render() {
    const {todo} = this.props;

    return (
      <p className="entry">{todo}</p>
    );
  }
}

export default Todos;
