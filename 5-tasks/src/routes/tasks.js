const express = require('express');
const {
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  createTask,
} = require('../controllers/tasks');

const taskRouter = express.Router();

// /tasks

taskRouter.get('/', getAllTasks);
taskRouter.get('/:id', getTaskById);
taskRouter.put('/:id', updateTaskById);
taskRouter.delete('/:id', deleteTaskById);
taskRouter.post('/', createTask);

module.exports = taskRouter;
