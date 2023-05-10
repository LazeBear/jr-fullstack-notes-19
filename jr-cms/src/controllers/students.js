const StudentModel = require('../models/Student');
// const student = new Student();

// db.collections.query
const getAllStudents = async (req, res) => {
  const students = await StudentModel.find().exec();
  // res.json({data:students})
  res.json(students);
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await StudentModel.findById(id).exec();
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

module.exports = {
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  createStudent,
};
