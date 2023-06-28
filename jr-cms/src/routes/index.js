const { Router } = require('express');
const studentRouter = require('./students');
const courseRouter = require('./courses');
const authRouter = require('./auth');
const authGuard = require('../middleware/authGuard');

const router = Router();

router.use('/students', authGuard, studentRouter);
router.use('/courses', authGuard, courseRouter);
router.use('/auth', authRouter);

module.exports = router;
