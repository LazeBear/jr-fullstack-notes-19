const express = require('express');
const taskRouter = require('./tasks');

const router = express.Router();

// /tasks <-> taskRouter
router.use('/tasks', taskRouter);

module.exports = router;
