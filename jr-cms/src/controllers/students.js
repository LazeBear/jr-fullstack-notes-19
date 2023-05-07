const StudentModel = require('../models/Student');
// const student = new Student();

const getAllStudents = async (req, res) => {
  res.json([]);
};
const getStudentById = async (req, res) => {};
const updateStudentById = async (req, res) => {};
const deleteStudentById = async (req, res) => {};
const createStudent = async (req, res) => {};

module.exports = {
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  createStudent,
};
