import React from "react";
import uuid from "uuid/v4";

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid() });
    this.setState({ task: "" })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          name="task"
          type="text"
          placeholder="new todo"
          id="task"
          onChange={this.handleChange}
          value={this.state.task}
        />
        <button>add todo</button>
      </form>
    )
  }
}

export default NewTodoForm;