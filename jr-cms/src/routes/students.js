const { Router } = require('express');
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudentById,
  addStudentToCourse,
  removeStudentFromCourse,
} = require('../controllers/students');

const studentRouter = Router();

studentRouter.get('/', getAllStudents);
studentRouter.post('/', createStudent);
studentRouter.get('/:id', getStudentById);
studentRouter.put('/:id', updateStudentById);
studentRouter.delete('/:id', deleteStudentById);
studentRouter.post('/:studentId/courses/:courseId', addStudentToCourse);
studentRouter.delete('/:studentId/courses/:courseId', removeStudentFromCourse);

module.exports = studentRouter;
