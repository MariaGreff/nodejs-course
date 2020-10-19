const router = require('express').Router();
const taskService = require('./task.service');

router.route('/:boardId/tasks').get(async (req, res, next) => {
  const tasks = await taskService.getTasksByBoardId(req.params.boardId);
  await res.status(200).send(tasks);
  next();
});

router.route('/:boardId/tasks/:taskId').get(async (req, res, next) => {
  const task = await taskService.getTasksByBoardTaskIds(
    req.params.boardId,
    req.params.taskId
  );
  if (task) {
    await res.status(200).json(task);
  } else {
    // res.status(404).json();
    const error = new Error();
    error.status = 404;
    return next(error);
  }
  next();
});

router.route('/:boardId/tasks').post(async (req, res, next) => {
  const task = await taskService.createTask(req.params.boardId, req.body);
  await res.status(200).json(task);
  next();
});

router.route('/:boardId/tasks/:taskId').put(async (req, res, next) => {
  const task = await taskService.updateTask(
    req.params.boardId,
    req.params.taskId,
    req.body
  );
  if (task) {
    res.status(200).json(task);
  } else {
    // res.status(404).json();
    const error = new Error();
    error.status = 404;
    throw error;
  }
  next();
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res, next) => {
  if (await taskService.deleteTask(req.params.taskId)) {
    res.status(204).json();
  } else {
    // res.status(404).json();
    const error = new Error();
    error.status(404);
    throw error;
  }
  next();
});

module.exports = router;
