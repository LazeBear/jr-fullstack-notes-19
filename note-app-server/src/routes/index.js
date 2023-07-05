const { Router } = require('express');
const notesRouter = require('./notes');

const router = Router();

router.use('/notes', notesRouter);

module.exports = router;
