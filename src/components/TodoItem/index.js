// Write your code here

import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  handleSave = () => {
    const {todoDetails, updateTodoTitle} = this.props
    const {updatedTitle} = this.state
    if (updateTodoTitle && updatedTitle.trim() !== '') {
      updateTodoTitle(todoDetails.id, updatedTitle)
    }
    this.setState({editing: false})
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {todoDetails, deleteTodo, toggleComplete} = this.props
    const {editing, updatedTitle} = this.state
    return (
      <li
        className={todoDetails.completed ? 'todo-item completed' : 'todo-item'}
      >
        {editing ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSave} type="button">
              Save
            </button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={todoDetails.completed}
              onChange={() => toggleComplete(todoDetails.id)}
            />
            <p className="title">{todoDetails.title}</p>
            <button onClick={this.handleEdit} type="button">
              Edit
            </button>
            <button onClick={() => deleteTodo(todoDetails.id)} type="button">
              Delete
            </button>
          </>
        )}
      </li>
    )
  }
}

export default TodoItem
