import React, { useState } from "react";
import Note from "./components/Note";

const App = props => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note....");

  const allNotes = notes.map(note => {
    return <Note note={note} key={note.id} />;
  });
  const addNewNote = event => {
    setNewNote(event.target.value);
  };
  const addNote = event => {
    event.preventDefault();
    const newSavedNote = {
      id: notes.length + 1,
      title: newNote
    };
    setNotes(notes.concat(newSavedNote));
    //setNotes([...notes, newSavedNote]);
    console.log(notes);
    setNewNote("");
  };
  return (
    <div>
      <h1>All Notes in the system</h1>
      <ul>{allNotes}</ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={addNewNote} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default App;
