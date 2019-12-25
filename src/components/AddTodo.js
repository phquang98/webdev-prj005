import React, { Component } from "react";
import PropTypes from "prop-types"; // start with uppercase

export default class AddTodo extends Component {
  state = {
    // this is example of compo state, a state which only this compo cares about + can only use it in here
    // this state is different to state in appjs
    // when have input ele, -> should have state for that input field
    title: ""
  };

  // when click an input ele, somehow create an event, which has target, which has value -> access it with e.target.value
  // setting the title to whatever we type in
  // observe constant state change in browser React extension
  onChange = eventWhenClickInput =>
    this.setState({
      [eventWhenClickInput.target.name]: eventWhenClickInput.target.value
    }); // same as `this.setState({ title: eventWhenClickInput.target.value });`

  onSubmit = eventWhenSumbitForm => {
    eventWhenSumbitForm.preventDefault(); // prevent submit to the actual file ???
    this.props.addTodo(this.state.title); // this line create a new todo -> must access to state in appjs -> only way atm is to write a func in appjs then pass it down
    // to AddTodojs
    this.setState({ title: "" }); // clear the input field
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add To Do Here... "
          style={{ flex: 10, padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange} // when creating a form field, you must handle func onChange (user typ -> onChange fire)
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

//
// starts with lowercase
AddTodo.propTypes = {
  // starts with uppercase
  addTodo: PropTypes.func.isRequired
};
