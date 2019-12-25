import React from "react";

export default function About() {
  return (
    // in JSX, you must return something that must be wrapped inside a <div>, for example
    // but when you dont need a div, you can use React.Fragment instead
    // this acts like a ghost ele, dont take space
    <React.Fragment>
      <h1>About</h1>
      <p>This is the TodoList App v1.0.1</p>
      <p>This was done using React Crash Course video by Traversy Media</p>
    </React.Fragment>
  );
}
