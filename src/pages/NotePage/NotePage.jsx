import React from "react";
import { useState, useEffect } from "react";
import { createNote, getNotes } from "../../utilities/notes-api";
import CreateNoteForm from "../../components/CreateNoteForm/CreateNoteForm";

function NotePage() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    async function getAllNotes() {
      const notes = await getNotes();
      setNotes(notes);
    }
    getAllNotes();
  }, []);

  return (
    <>
      <div>Notes</div>
      <CreateNoteForm
        createNote={createNote}
        setNotes={setNotes}
        notes={notes}
      />
      <div className="notesContainer">
        {notes.length !== 0 ? (
          <>
            {notes.map((note, idx) => (
              <div>
                <p key={idx}>{note.text}</p>
                <p>{note.createdAt.toLocaleString()}</p>
              </div>
            ))}
          </>
        ) : (
          <div>
            <p>No notes yet</p>
          </div>
        )}
      </div>
    </>
  );
}

export default NotePage;
