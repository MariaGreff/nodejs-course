const usersRepo = require('./user.db.repository');
const { deleteUserFromTasks } = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();
const createUser = user => usersRepo.createUser(user);
const getUserById = id => usersRepo.getUserById(id);
const updateUser = (id, data) => usersRepo.updateUser(id, data);
const deleteUser = async id => {
  await deleteUserFromTasks(id);
  return usersRepo.deleteUser(id);
};

module.exports = {
  getAll,
  createUser,
  getUserById,
  updateUser,
  deleteUser
};
