const { Router } = require('express');
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudentById,
} = require('../controllers/students');

const studentRouter = Router();

studentRouter.get('/', getAllStudents);
studentRouter.post('/', createStudent);
studentRouter.get('/:id', getStudentById);
studentRouter.put('/:id', updateStudentById);
studentRouter.delete('/:id', deleteStudentById);

module.exports = studentRouter;
