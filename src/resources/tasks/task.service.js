const taskRepo = require('./task.db.repository');

const getTasksByBoardId = boardId => taskRepo.getTasksByBoardId(boardId);
const getAll = () => taskRepo.getAll();
const getTasksByBoardTaskIds = (boardId, taskId) =>
  taskRepo.getTasksByBoardTaskIds(boardId, taskId);

const createTask = (boardId, task) => taskRepo.createTask(boardId, task);

const deleteTaskByBoardId = boardId => taskRepo.deleteTaskByBoardId(boardId);
const updateTask = (boardId, taskId, data) =>
  taskRepo.updateTask(boardId, taskId, data);
const deleteTask = taskId => taskRepo.deleteTask(taskId);
const deleteUserFromTasks = userId => taskRepo.deleteUserFromTasks(userId);

module.exports = {
  getTasksByBoardId,
  getAll,
  getTasksByBoardTaskIds,
  createTask,
  deleteTaskByBoardId,
  updateTask,
  deleteTask,
  deleteUserFromTasks
};
