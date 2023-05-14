const CourseModel = require('../models/Course');
const StudentModel = require('../models/Student');
const Joi = require('joi');
const { createCourseSchema } = require('../validations/course');
// commonjs

/**
 * 1. callback
 * CourseModel.find().exec((err, courses) => {
 *    if (err) {
 *      res.status(500).json({error: 'Something went wrong'});
 *      return;
 *    }
 *   res.json(courses);
 * });
 *
 * 2. promise
 * CourseModel.find().exec().then((courses) => {
 *  res.json(courses);
 * }).catch((err) => {
 *  res.status(500).json({error: 'Something went wrong'});
 * });
 * 3. async await
 * try {
 *    const courses = await CourseModel.find().exec();
 *    xxx
 *    xxx
 * } catch(e) {
 *    res.status(500).json({error: 'Something went wrong'});
 * }
 *
 * 4. express-async-errors
 */

/**
 *
 * function catchAll(routeHandler) {
 * // middleware function
 *  return (req, res, next) => {
 *   try {
 *      routeHandler(req, res, next);
 *   } catch(e) {
 *      next(e);  -> error middleware
 *   }
 *  }
 * }
 */

const getAllCourses = async (req, res) => {
  // try {
  const courses = await CourseModel.find().exec();
  res.json(courses);
  // } catch(e) {
  // next(e);
  //   console.error(e); // winston
  //   res.status(500).json({error: 'Something went wrong'});
  // }
};

const getCourseById = async (req, res) => {
  // try {
  const { id } = req.params;
  const course = await CourseModel.findById(id).populate('students').exec();
  if (!course) {
    res.status(404).json({ error: 'Course not found' });
    return;
  }
  res.json(course);
  // } catch(e) {
  // }
};

const updateCourseById = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const course = await CourseModel.findByIdAndUpdate(
    id,
    { name, description },
    { new: true }
  ).exec();
  if (!course) {
    res.status(404).json({ error: 'Course not found' });
    return;
  }
  res.json(course);
};

const deleteCourseById = async (req, res) => {
  const { id } = req.params;
  const course = await CourseModel.findByIdAndDelete(id).exec();
  if (!course) {
    // next(new NotFoundError('Course not found'));
    res.status(404).json({ error: 'Course not found' });
    return;
  }
  await StudentModel.updateMany(
    { courses: course._id },
    {
      $pull: {
        courses: course._id,
      },
    }
  ).exec();
  res.sendStatus(204);
};

const createCourse = async (req, res) => {
  // const { name, description, code } = req.body;
  // const schema = Joi.object({
  //   name: Joi.string().min(2).max(255).required(),
  //   description: Joi.string().optional(),
  //   // XXXX1234
  //   // X1
  //   code: Joi.string()
  //     .uppercase()
  //     .regex(/^[a-zA-Z]+[0-9]+$/)
  //     .message('Invalid code format')
  //     .required(),
  // });
  const validBody = await createCourseSchema.validateAsync(req.body, {
    allowUnknown: true,
    stripUnknown: true,
  });

  const course = new CourseModel(validBody);
  await course.save();
  res.status(201).json(course);
};

module.exports = {
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
  createCourse,
};
