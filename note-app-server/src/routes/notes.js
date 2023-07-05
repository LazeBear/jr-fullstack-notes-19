const { Router } = require('express');
const { addNote, deleteNote, getAllNotes } = require('../controllers/notes');

const notesRouter = Router();

notesRouter.get('/', getAllNotes);
notesRouter.post('/', addNote);
notesRouter.delete('/:id', deleteNote);

module.exports = notesRouter;
