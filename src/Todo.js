import React from 'react';
import './Todo.css';

export default class Todo extends React.PureComponent {
  render() {
    const { done, name } = this.props;
    // console.log(`todo ${name} renders`);
    return (
      <div className="todos">
        <input type="checkbox" checked={done} onChange={this.handleCheck} />
        <div
          className="todotext"
          style={{
            textDecoration: done ? 'line-through' : null,
            color: done ? 'gray' : null,
          }}
        >
          {name}
        </div>
        <div className="delete" onClick={this.removeTodo}></div>
      </div>
    );
  }
  removeTodo = () => this.props.onDelete(this.props.id);
  handleCheck = (e) => this.props.onDone(e.target.checked, this.props.id);
}
