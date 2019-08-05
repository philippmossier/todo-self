import React from 'react';
import Todo from "./todo.component";
import NewTodoForm from './new-todo-form.component';

//with create = (newTodo) => { you dont need to bind this

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    };
  }

  create = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  remove = (id) => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo key={todo.id} id={todo.id} task={todo.task} removeTodo={this.remove} />
    })
    return (
      <div>
        <h1>Todo List!</h1>
        <ul>{todos}
        </ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    )
  }
}

export default TodoList;