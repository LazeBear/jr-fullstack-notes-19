const { Router } = require('express');
const studentRouter = require('./students');

const router = Router();

router.use('/students', studentRouter);

module.exports = router;
