// const Task = require('./task.model');

// let tasks = [
//   {
//     id: 'task-0000-0000-0000-0000',
//     title: 'default task',
//     order: 1,
//     description: '',
//     userId: null,
//     boardId: 'board-0000-0000-0000-0000',
//     columnId: 'column-0000-0000-0000-0000'
//   }
// ];

// const getTasksByBoardId = async boardId => {
//   return tasks.filter(task => task.boardId === boardId);
// };

// const getTasksByBoardTaskIds = async (boardId, taskId) =>
//   tasks.find(task => task.id === taskId);

// const createTask = async (boardId, task) => {
//   const newTask = new Task(task);
//   newTask.boardId = boardId;
//   tasks.push(newTask);
//   return newTask;
// };

// const deleteTaskByBoardId = async boardId => {
//   tasks = tasks.filter(task => task.boardId !== boardId);
// };

// const updateTask = async (boardId, taskId, data) => {
//   const index = tasks.findIndex(task => task.id === taskId);
//   if (index < 0) {
//     return null;
//   }
//   const task = new Task(data);
//   task.id = taskId;
//   tasks[index] = task;
//   tasks[index].boardId = data.boardId;
//   tasks[index].columnId = data.columnId ? data.columnId : tasks[index].columnId;
//   tasks[index].userId = data.userId ? data.userId : tasks[index].userId;
//   tasks[index].description = data.description
//     ? data.description
//     : tasks[index].description;
//   tasks[index].order = data.order ? data.order : tasks[index].order;
//   tasks[index].title = data.title ? data.title : tasks[index].title;
//   return task;
// };

// const deleteTask = async taskId => {
//   const index = tasks.findIndex(task => task.id === taskId);
//   if (index < 0) {
//     return false;
//   }
//   tasks.splice(index, 1);
//   return true;
// };

// const deleteUserFromTasks = async userId => {
//   tasks = tasks.map(task => {
//     if (task.userId === userId) {
//       task.userId = null;
//     }
//     return task;
//   });
// };

// module.exports = {
//   getTasksByBoardId,
//   createTask,
//   getTasksByBoardTaskIds,
//   deleteTaskByBoardId,
//   updateTask,
//   deleteTask,
//   deleteUserFromTasks
// };
