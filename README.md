# React Crash Course

A todo application with add + delete functionality built using React.\
This repo is for learning and practice purpose only.

## :smile: **Getting Started/Brief Description**

A websites with 2 page.\
The "Home" page (`https://domain_here/`) provides an input field to add todo and a list of todos with the X button to delete. All data is taken from JSONPlaceHolder.\
The "About" page (`https://domain_here/about`) credits the creator of this exercise. Check credits for more info.

## :computer: **Prerequisites/Built With/Technologies used**

- React
  - `react` and `react-dom`: React technology and the virtual DOM tree for loading compoes in browser (`react-dom` are not used in mobile)
  - `react-router-dom`: provides navigation logic through the application
  - `prop-types`: checking sure how many and what kind of props should this compo have
  - `uuid`: generating ID on the fly
  - `react-scripts`: give premade features to this application e.g compiling, running tests, ...
- `axios` for sending HTTP reqs
- ESLint + Prettier + AirBNB Style Guide

## :page_facing_up: **Installing/Running**

Clone this repo and run `npm start` -> a web tab will be opened to view the application.\
Build it with `npm run build` -> a `build` folder will be created, containing all static files.

## :car: **Deployment**

Maybe on Github Pages ?

## :memo: **Notes**

NEED CODE REFACTORING!!!
Learn React Life Cycle, Hooks, Redux and Navigation.

_Where is the entry point ?_

`index.html` -> `index.js` -> `App.js`

React is a single page app, run through 1 page. Notice `index.html` has an `<div id="root"></div>`
Basically, `App.js` will be rendered by `index.js` and put the result to `<div id="root"></div>` in `index.html`

_How compoes pass data to each other (no other libraries/modules) ?_

By using state in the biggest compo, and props in others compoes. Must know the hierachy -> perform compo drilling.\
In this application:

- data is stored in `state` in `App.js` (todo data)
- data (an obj containing an arr containing bunch of todo ele) then will be passed down to `Todo.js`'s `props` (`Todo.js`: a list that contains many `TodoItem.js`)
- data now is in `Todo.js`
- again, data will be passed down to `TodoItem.js`'s props, which is the final destination

_Random notes_

- when create a compo, you must export it, then import into larger compo that will use it, e.g `App.js`
- when dont use state, use func compo instead of class compo
- if use VSC, should installed ES7 Snippet, then use `rfc + tab` for func compo and `rcc + tab` for class compo
- when using `map()`, each iterating ele must have unique `key="unique_value_here"`
- dynamic styling: compo can have multiple styling if you put style in func, and write code logically to handle it
- some HTML tags will have basic events calling func like: `onChange()`, `onClick()` and `onSubmit()`
  - `onChange={this.markComplete}` will call a func called `markComplete()` in that compo
  - func should be written above `render()`
- destructuring assignment must have same name as what attributes inside obj/arr being destructured
- atm, only way to change state is using `setState()`

VIET TIEP VAO DAY

cach chuyen tu compo be hon sang compo lon hon khong su dung redux -> dung props
check the box in TodoItem -> trigger a func called markComplete in props of TodoItem, which is passed down from Todos in markComplete={this.props.markComplete}, which props of Todos is again, passed down from App.js
in short
data -> state in Appjs -> appjs pass down to props Todos with `<Todos markComplete={this.markComplete} todos={this.state.todos} />`
-> now Todos has propsTodos, inside propsTodos has data from appjs -> todos passed down to props todoitem with `<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}`
-> now todoitem can access data from appjs via props

huy beo dung hooks

why when delete, we must use spread operator [...arr]

uuid de generate random id

this use react router dom de chuyen pages (another options is react navigation ?)

when using react router dom, we use link tag, not a tag (a tag is an HTML ele)

to make req fetch data from api, you can use: FETCH API or axios (a HTTP library), we use axios here

what axios do, is axios.delete, axios.get, axios.post all returns a Promise

to finalize this code (use it), run `npm run build` -> generate a new folder called `build` with all static files

chu y, compo chi hieu this la chinh no trong doan render() va cac func life cycle cua React do compo ke thua tu {Component} from react
khai bao this trong truong hop duoi chac chan loi

```js
markComplete(){ // day la custom func -> dont have access to this -> dont know this is this compo
    console.log(this.props);
}

// cach sua
markComplete = e => { // vi day la arrow func -> arrow func su dung this cua thang wrap ngoai no -> o day class compo wrap ngoai arrow func nay -> this o day chinh la class compo TodoItem
    console.log(this.props);
}

render(){
    return(
    ....
    )
}
```

## :bell: **Contributing**

Check credits.

## :speech_balloon: **Authors**

Check credits.

## :grey_exclamation: **License**

**This was intentionally left blank.**

## :email: **Credits/Acknowledgments/References**

This exercise was done using this [tutorial](https://www.youtube.com/watch?v=sBws8MSXN7A)
