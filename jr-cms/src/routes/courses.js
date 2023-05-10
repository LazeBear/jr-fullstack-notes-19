const { Router } = require('express');
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourseById,
  deleteCourseById,
} = require('../controllers/courses');

const courseRouter = Router();

courseRouter.get('/', getAllCourses);
courseRouter.post('/', createCourse);
courseRouter.get('/:id', getCourseById);
courseRouter.put('/:id', updateCourseById);
courseRouter.delete('/:id', deleteCourseById);

module.exports = courseRouter;
