const Note = require("../../models/note");

module.exports = {
  createNote,
  getNotesByUser,
};

async function createNote(req, res) {
  try {
    const note = await Note.create({ ...req.body, user: req.user });
    res.json(note);
  } catch (err) {
    console.log(err);
  }
}

async function getNotesByUser(req, res) {
  try {
    const notes = await Note.find({ user: req.user });
    res.json(notes);
  } catch (err) {
    console.log(err);
  }
}
