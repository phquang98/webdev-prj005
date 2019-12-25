import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

// If this line show error unexpected var, use let or const instead -> ESLint running

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// use this to make sure how many and what kind of props you will get
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
