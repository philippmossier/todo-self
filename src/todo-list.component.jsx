import React from 'react';
import Todo from "./todo.component";

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [{ task: "walk the dog" }, { task: "feed cat" }]
    };
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />
    })
    return (
      <div>
        <h1>Todo List!</h1>
        <ul>
          <li>{todos}</li>
        </ul>
      </div>
    )
  }
}

export default TodoList;