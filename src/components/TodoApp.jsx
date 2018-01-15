import React, { Component } from 'react';
import axios from 'axios';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos';
  }

  componentDidMount() {
    axios.get(this.apiUrl).then((res) => {
      this.setState({ todoList: res.data });
    });
  }

  handleAddTodo(val) {
    const todoList = this.state.todoList.slice();

    axios.post(this.apiUrl, { text: val }).then((res) => {
      todoList.push(res.data);
      this.setState({ todoList });
    });
  }

  handleRemoveTodo(id) {
    const todoList = this.state.todoList.filter(todo => todo.id !== id);
    axios.delete(`${this.apiUrl}/${id}`).then(() => {
      this.setState({ todoList });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
          <Title />
          <TodoForm onClick={this.handleAddTodo} />
          <TodoList tasks={this.state.todoList} onClick={this.handleRemoveTodo} />
        </div>
      </div>
    );
  }
}

export default TodoApp;
