import Todo from './Todo';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      todos: [],
    };
  }

  render() {
    const { todos, name } = this.state;
    const doneCount = todos.filter((todo) => todo.done).length;
    return (
      <div>
        <div className="count">
          <div>All:{this.state.todos.length}</div>
          <div>Done:{doneCount}</div>
          <div>Left:{this.state.todos.length - doneCount}</div>
        </div>
        <div className="in-area">
          <input
            className="in-field"
            value={name}
            onChange={this.handleSetName}
            placeholder="enter your to-do task"
          />
          <button onClick={this.handleAddTodo}>Add new to-do</button>
        </div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            done={todo.done}
            onDone={this.handleSetDone}
            onDelete={this.deleteTodo}
          />
        ))}
      </div>
    );
  }
  handleSetName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleAddTodo = () => {
    if (
      this.state.name !== '' &&
      this.state.name[0] !== ' ' &&
      this.state.name[this.state.name.length - 1] !== ' '
    ) {
      const todo = {
        name: this.state.name,
        done: false,
        id: Date.now() + this.getRandomString(),
      };
      this.setState({
        name: '',
        todos: [todo].concat(this.state.todos),
      });
    }
  };

  getRandomString = () => Math.random().toString(36).substring(2);

  handleSetDone = (done, id) => {
    this.setState({
      todos: this.state.todos
        .map((todo) => (todo.id === id ? { ...todo, done } : todo))
        .sort((a, b) => {
          if (a.done === true && b.done === false) {
            return 1;
          } else if (a.done === b.done) {
            return 0;
          } else {
            return -1;
          }
        }),
    });
  };
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };
}

export default App;
