import React, { Component } from "react";
import AddNewTask from "./AddNewTask";
import TaskList from "./TaskList";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowAddNew: false,
      taskList: [],
    };
  }

  showAddNewTask = () => {
    this.setState({ isShowAddNew: true });
  };

  addNewTask = (taskContent) => {
    let { taskList } = this.state;
    const newTask = {
      id: Math.random() * 10000,
      name: taskContent,
      status: "pending",
    };
    taskList.push(newTask);
    this.setState({ taskList: taskList });
  };

  changeTaskStatus = (id, status) => {
    const { taskList } = this.state;
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id == id) {
        taskList[i].status = status;
      }
    }
    this.setState({ taskList: taskList });
  };

  deleteTaskItem = (id) => {
    let { taskList } = this.state;
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id == id) {
        taskList.splice(i, 1);
        // const arr = [ 1, 3, 5, 6, 7 ];
        // arr.splice(2, 1)
      }
    }
    this.setState({ taskList: taskList });
  };

  render() {
    const { isShowAddNew, taskList } = this.state;
    const now = new Date();
    const monthNames = [
      "January", // 0
      "February", // 1
      "March", // 2
      "April", // 3
      "May", // 
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December", // 11
    ];
    // Shift + Alt + F : Format code cho đẹp
    const dateNow =
       monthNames[now.getMonth()] +" " + now.getDate() + ", " + now.getFullYear();
    return (
      <>
        <div className="container">
          <div id="to-do-app" className="to-do-list">
            <h1>To-do list</h1>
            <i
              id="clear-list"
              className="fa fa-trash-o"
              aria-hidden="true"
              title="Clear All"
            />
            <span id="title-date" className="title-date">
              {dateNow}
            </span>
            <div className="tasker-container">
              <TaskList
                taskList={taskList}
                changeTaskStatus={this.changeTaskStatus}
                deleteTaskItem={this.deleteTaskItem}
              />
            </div>
            <div onClick={this.showAddNewTask} className="add-task-button">
              +
            </div>
            {isShowAddNew ? <AddNewTask newTask={this.addNewTask} /> : ""}
          </div>
        </div>
      </>
    );
  }
}
