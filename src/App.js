import React, { useState } from 'react';
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './styles/App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  const addOrUpdateNote = (note) => {
    if (currentNote) {
      setNotes(notes.map(n => (n.id === currentNote.id ? { ...note, id: currentNote.id } : n)));
    } else {
      setNotes([...notes, { ...note, id: Date.now() }]);
    }
    setCurrentNote(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (id) => {
    const note = notes.find(note => note.id === id);
    setCurrentNote(note);
  };

  const cancelEdit = () => {
    setCurrentNote(null);
  };

  return (
    <div className="app">
      <Header />
      <NoteForm currentNote={currentNote} onSave={addOrUpdateNote} onCancel={cancelEdit} />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
    </div>
  );
};

export default App;
