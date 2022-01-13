import React, { Component } from "react";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  doneTask = (id) => {
    this.props.changeTaskStatus(id, 'done');
  }

  deleteItem = (id) => {
    this.props.deleteTaskItem(id);
  }
  
  render() {
    const { task } = this.props;
    return (
      <li className="task-item">
        <span style={{textDecoration: task.status == 'done' ? 'line-through' : ''}}>{ task.name }</span>
        <div className="btn-group">
          <button onClick={() => this.deleteItem(task.id)} className="btn btn-danger">Delete</button>
          <button onClick={() => this.doneTask(task.id)} className="btn btn-success">Done</button>
        </div>
      </li>
    );
  }
}

export default TaskItem;
