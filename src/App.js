import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; // the word BrowserRouter is long -> can use an alias to call like that
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from "uuid";
import axios from "axios";

class App extends Component {
  state = {
    todos: [
      // custom made data
      // {
      //   id: uuid.v4(),
      //   title: "Take out the trash",
      //   completed: true
      // },
      // {
      //   id: uuid.v4(),
      //   title: "Dinner",
      //   completed: true
      // },
      // {
      //   id: uuid.v4(),jj
      //   title: "Sleep",
      //   completed: false
      // }
    ]
  };

  // to make initial req to API, we use a life cycle met (one use here is render())
  // this life cycle met runs right after the compo mount
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => this.setState({ todos: res.data }));
  }

  markComplete = id => {
    this.setState({
      // changing state data (state here is an obj, inside state is a tdos arrs, containing many smaller )
      todos: this.state.todos.map(todo => {
        // a new todos arr will now start with the old todos arr, then perform a map func on that old todos arr that
        // loop through that old arr to check each ele todo if they had the id the same as the id passed From TodoItem
        // if yes, the completed attri will be changed to opposite value
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
    console.log(`The todo element being clicked is: ${id}`);
  };

  // // Delete todo, works logic same as markCompleted
  // // this must mani[ulate] state to remove todo data, do with JS filter mets
  // // filter create a new arr when done and do not return anything -> if not use spread operator, todos: [] will become an empty arr
  // // the use of spread operator is for short syntax only, look down for
  // delTodo = id => {
  //   this.setState({
  //     // use spread opeartor to copy everything there, then filter what we received by removing the todo data have the same id as the todo data we wanna remove
  //     todos: [...this.state.todos.filter(todo => todo.id !== id)]
  //   });
  // };

  // Delete func to JSONPlaceHolder
  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        // use spread opeartor to copy everything there, then filter what we received by removing the todo data have the same id as the todo data we wanna remove
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  // this code is identical to above code, but here dont use spread operator
  // delTodo = id => {
  //   const newTodo = this.state.todos.filter(todo => todo.id !== id);
  //   this.setState({
  //     todos: newTodo
  //   });
  // };

  // // Add func normally
  // addTodo = titlePassedFromStateAddTodo => {
  //   const newTodo = {
  //     id: uuid.v4(),
  //     title: titlePassedFromStateAddTodo,
  //     completed: false
  //   };
  //   // use spread operator, we have oto cpy everything
  //   this.setState({
  //     todos: [...this.state.todos, newTodo]
  //   });
  // };

  // Add func to JSONPlaceHolder
  // first post to the API, 2nd arg is the todo data
  // then handle the res, which only contains the newly created todo (use console.log to check)
  // finally useState to update visually and add that res to the todo list
  addTodo = titlePassedFromStateAddTodo => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: titlePassedFromStateAddTodo,
        completed: false
      })
      .then(res =>
        this.setState({
          todos: [...this.state.todos, res.data]
        })
      );
    // use spread operator, we have oto cpy everything
  };

  render() {
    // to use BrowserRouter (alias Router), we must wrap everything inside it
    // strucuture of app
    // Router
    //      Main Page /
    //      About Page /about
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* Main Page, `exact` attri in JSX is for main page only ???*/}
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                    todos={this.state.todos}
                  />
                </React.Fragment>
              )}
            />
            {/* About Page */}
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
