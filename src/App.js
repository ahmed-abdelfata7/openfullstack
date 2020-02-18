import React, { useState } from "react";
import Note from "./components/Note";

const App = props => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note....");
  const [showAll, setShowAll] = useState(true);

  const allNotes = showAll
    ? notes.map(note => {
        return <Note note={note} key={note.id} />;
      })
    : notes
        .filter(note => {
          return note.important;
        })
        .map(note => {
          return <Note note={note} key={note.id} />;
        });
  const addNewNote = event => {
    setNewNote(event.target.value);
  };
  const addNote = event => {
    event.preventDefault();
    let important = notes.length % 2 === 0 ? true : false;
    const newSavedNote = {
      id: notes.length + 1,
      title: newNote,
      important
    };
    setNotes(notes.concat(newSavedNote));
    //setNotes([...notes, newSavedNote]);
    console.log(notes);
    setNewNote("");
  };
  const showHide = () => {
    setShowAll(!showAll);
  };
  return (
    <div>
      <h1>All Notes in the system</h1>
      <ul>{allNotes}</ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={addNewNote} />
        <button type="submit">Add</button>
      </form>
      <button onClick={showHide}>{showAll ? "important" : "all"}</button>
    </div>
  );
};
export default App;
