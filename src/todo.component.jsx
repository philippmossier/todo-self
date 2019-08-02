import React from "react";

//const Todo = ({ task }) => destructured from const Todo = ( props )
const Todo = ({ task }) => (
  <div>
    <button>Edit</button>
    <button>X</button>
    <li>{task}</li>
  </div>
)

export default Todo;

