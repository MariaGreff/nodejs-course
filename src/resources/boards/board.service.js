const boardsRepo = require('./board.db.repository');
const { deleteTaskByBoardId } = require('../tasks/task.service');

const getAll = () => boardsRepo.getAll();
const createBoard = data => boardsRepo.createBoard(data);
const getBoardById = id => boardsRepo.getBoardById(id);
const updateBoard = (id, data) => {
  return boardsRepo.updateBoard(id, data);
};
const deleteBoard = async id => {
  await deleteTaskByBoardId(id);
  return boardsRepo.deleteBoard(id);
};

module.exports = {
  getAll,
  createBoard,
  getBoardById,
  updateBoard,
  deleteBoard
};
