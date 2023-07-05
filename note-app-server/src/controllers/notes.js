const Note = require('../models/note');

const addNote = async (req, res) => {
  const { text } = req.body;

  const note = new Note({
    text,
  });

  await note.save();

  res.json(note);
};

const deleteNote = async (req, res) => {
  const { id } = req.params;

  await Note.findByIdAndDelete(id).exec();

  res.sendStatus(204);
};

const getAllNotes = async (req, res) => {
  const notes = await Note.find().exec();

  res.json(notes);
};

module.exports = {
  getAllNotes,
  addNote,
  deleteNote,
};
