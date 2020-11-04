const User = require('./user.model');

const getAll = async () => {
  return await User.find({});
};

const getUserById = async id => {
  return await User.findOne({ _id: id });
};

const createUser = async user => {
  return await User.create(user);
};

const updateUser = async (id, data) => {
  return await User.updateOne({ _id: id }, data);
};

const deleteUser = async id => {
  return (await User.deleteOne({ _id: id })).deletedCount;
};

const getPasswordByUser = async (login, password) => {
  return await User.findOne({ login, password });
};

module.exports = {
  getAll,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getPasswordByUser
};
