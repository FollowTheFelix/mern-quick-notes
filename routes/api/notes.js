const express = require("express");
const router = express.Router();
const notesCtrl = require("../../controllers/api/notes");

router.get("/", notesCtrl.getNotesByUser);
router.post("/create", notesCtrl.createNote);

module.exports = router;
