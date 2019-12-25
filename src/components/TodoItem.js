import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  markComplete = e => {
    console.log(this.props);
  };

  render() {
    /* instead of writing 
            <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, this.props.todo.id)}
          />{" "}
          {this.props.todo.title}
        </p>
        to access todo id and title in appjs state, we can use destructuring asssignment
    */
    // destructuring assignment start here
    const { id, title } = this.props.todo; // inside destructuring bracket {}, args must have name exactly like what defined
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)} // bind this, which is TodoItem, to this markComplete
          />{" "}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            X
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  backgroundColor: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
