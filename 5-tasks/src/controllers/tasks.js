const createLogger = require('../utils/logger');
const logger = createLogger('tasks.js');
const tasks = [
  {
    id: 1,
    description: 'task 1',
    done: false,
  },
];

let id = 1; //self increase

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: The unique identifier of the task
 *          example: 1
 *        description:
 *          type: string
 *          description: The description of the task
 *        done:
 *          type: boolean
 *          description: The complete state of the task
 *
 *
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Retrive all tasks or filter by description
 *    parameters:
 *      - in: query
 *        name: description
 *        schema:
 *          type: string
 *        description: use this field to filter task by description
 *    responses:
 *      200:
 *        description: a list of tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 */
const getAllTasks = (req, res) => {
  // //
  // try {
  //   const tasks = taskService.findAllTasks();
  //   res.json(tasks);
  // } catch (e) {
  //   res.status(404).json({ error: e.message });
  // }
  // route handler
  // if (Object.keys(req.query).length === 0) {
  //   res.status(200).json(tasks);

  //   return;
  // }

  const { description } = req.query;

  if (description) {
    const tasksfiltered = tasks.filter((task) =>
      task.description.includes(description)
    );
    // filteredTasks
    res.json(tasksfiltered);
    return;

    // tasksfiltered.length > 0
    //   ? res.status(200).json(tasksfiltered)
    //   : res.status(404).json('task not found');
  }
  // else {
  //   res.status(404).json('unknown search query');
  // }
  // logger.info('user cannot request all tasks');
  // res.status(400).json('error');
  res.json(tasks);
  return;
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  const numericId = Number(id);

  // early exit, fail fast
  if (!(Number.isInteger(numericId) && numericId > 0)) {
    res.status(404).json({ error: 'invalid id!' });
    return;
  }

  const taskFound = tasks.find((task) => task.id === numericId);

  if (!taskFound) {
    res.status(404).json('task not found');
    return;
  }

  res.status(200).json(taskFound);

  return; // lint
};

const updateTaskById = (req, res) => {
  const { id } = req.params;

  const { description, done } = req.body;

  if (!id || Number(id) <= 0) {
    res.status(404).json('invalid id!');

    return;
  }

  // data validation
  // Check existence
  // check type
  if (!description && done !== true && done !== false) {
    res.status(400).json('Please modify your put body');

    return;
  }

  let taskFound = tasks.find((task) => task.id === Number(id));

  if (!taskFound) {
    res.status(404).json('task not found');

    return;
  } //   if (description) { //     taskFound.description = description; //     if (done === true || done === false) { //       taskFound.done = done; //     } //   } else { //     taskFound.done = done; //   }

  taskFound.description = description ?? taskFound.description;

  if (done === true || done === false) {
    taskFound.done = done;
  }

  res.status(200).json(taskFound);

  return;
};

const createTask = (req, res) => {
  const { description } = req.body;

  if (!description) {
    res.status(400).json('invalid body');

    return;
  } //   const index = tasks.findIndex( //     (task) => task.description === req.body.description //   ); //   if (index >= 0) { //     res.status(409).json("task already existing"); //     return; //   }

  // id++;
  // ++id;
  const taskNew = { id: ++id, description, done: false };

  tasks.push(taskNew);

  res.status(201).json(taskNew);

  return;
};

const deleteTaskById = (req, res) => {
  const { id } = req.params;

  if (!id || Number(id) <= 0) {
    res.status(404).json('invalid id!');

    return;
  }

  const index = tasks.findIndex((task) => task.id === Number(id));
  // filter

  if (index < 0) {
    res.status(404).json('task not found');

    return;
  }

  tasks.splice(index, 1);
  res.sendStatus(204); // No content
  // res.status(200).json('task deleted sucessfully');
};

module.exports = {
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  createTask,
};

// yaml
// yml
