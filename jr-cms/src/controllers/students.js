const StudentModel = require('../models/Student');
// const student = new Student();
const CourseModel = require('../models/Course');

// db.collections.query
const getAllStudents = async (req, res) => {
  const students = await StudentModel.find().exec();
  // res.json({data:students})
  res.json(students);
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await StudentModel.findById(id)
    .populate('courses', 'name description')
    .exec();
  if (!student) {
    res.status(404).json({ error: 'Student not found' });
    return;
  }
  // res.json({data:student})
  res.json(student);
};

const updateStudentById = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  // const student = await StudentModel.findById(id).exec();
  // student.firstName = firstName;
  // student.save();
  const student = await StudentModel.findByIdAndUpdate(
    id,
    { firstName, lastName, email },
    { new: true }
  ).exec();
  if (!student) {
    res.status(404).json({ error: 'Student not found' });
    return;
  }
  res.json(student);
};
// slug
const deleteStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await StudentModel.findByIdAndDelete(id).exec();
  if (!student) {
    res.status(404).json({ error: 'Student not found' });
    return;
  }
  await CourseModel.updateMany(
    {
      students: student._id,
    },
    {
      $pull: {
        students: student._id,
      },
    }
  ).exec();
  res.sendStatus(204);
};

const createStudent = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  // data validation
  // const student = new StudentModel(req.body);
  const student = new StudentModel({ firstName, lastName, email });
  await student.save();
  // StudentModel.create
  res.status(201).json(student);
};

// POST /v1/students/:studentId/courses/:courseId
const addStudentToCourse = async (req, res) => {
  const { studentId, courseId } = req.params;
  // 查找学生id
  const student = await StudentModel.findById(studentId).exec();
  // 查找课程id
  const course = await CourseModel.findById(courseId).exec();
  // 确保学生和课程都存在
  if (!student || !course) {
    res.status(404).json({ error: 'Student or course not found' });
    return;
  }
  // transaction - replica set
  // 给学生添加课程
  // student.courses.push(courseId);
  student.courses.addToSet(courseId);
  // 给课程添加学生
  course.students.addToSet(studentId);
  // 保存学生
  await student.save();
  // 保存课程
  await course.save();
  // await CourseModel.findByIdAndUpdate(courseId, {
  //   $addToSet: { students: studentId },
  // }).exec();
  res.json(student);
};

// DELETE /v1/students/:studentId/courses/:courseId
const removeStudentFromCourse = async (req, res) => {
  const { studentId, courseId } = req.params;
  const student = await StudentModel.findById(studentId).exec();
  const course = await CourseModel.findById(courseId).exec();
  if (!student || !course) {
    res.status(404).json({ error: 'Student or course not found' });
    return;
  }
  student.courses.pull(courseId); // -> $pull
  course.students.pull(studentId);
  // await CourseModel.findByIdAndUpdate(courseId, {
  //   $pull: { students: studentId },
  // }).exec();
  await student.save();
  await course.save();
  res.sendStatus(204);
};

module.exports = {
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  createStudent,
  addStudentToCourse,
  removeStudentFromCourse,
};
