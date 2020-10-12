const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const createUser = user => usersRepo.createUser(user);
const getUserById = id => usersRepo.getUserById(id);
const updateUser = (id, data) => usersRepo.updateUser(id, data);
const deleteUser = id => usersRepo.deleteUser(id);

module.exports = {
  getAll,
  createUser,
  getUserById,
  updateUser,
  deleteUser
};
