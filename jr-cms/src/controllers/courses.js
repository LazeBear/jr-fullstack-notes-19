const CourseModel = require('../models/Course');
const Joi = require('joi');
const { createCourseSchema } = require('../validations/course');
// commonjs

const getAllCourses = async (req, res) => {
  const courses = await CourseModel.find().exec();
  res.json(courses);
};

const getCourseById = async (req, res) => {
  const { id } = req.params;
  const course = await CourseModel.findById(id).populate('students').exec();
  if (!course) {
    res.status(404).json({ error: 'Course not found' });
    return;
  }
  res.json(course);
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
    res.status(404).json({ error: 'Course not found' });
    return;
  }
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
