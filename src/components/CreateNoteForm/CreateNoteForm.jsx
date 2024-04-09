import React from "react";
import { useState } from "react";

function CreateNoteForm({ createNote, setNotes, notes }) {
  const [newNote, setNewNote] = useState({
    text: "",
  });

  function handleChange(evt) {
    setNewNote({ ...newNote, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const note = await createNote(newNote);
      setNewNote({
        text: "",
      });
      setNotes([...notes, note]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div>CreateNoteForm</div>
      <form onSubmit={handleSubmit}>
        <label>Enter your note: </label>
        <textarea
          onChange={handleChange}
          name="text"
          id="noteFormText"
          value={newNote.text}
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Submit Note</button>
      </form>
    </>
  );
}

export default CreateNoteForm;
