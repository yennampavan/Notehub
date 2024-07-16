import React, { useState, useEffect } from 'react';

function Noteform({ addNote, currentNote, updateNote }) {
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    if (currentNote.id) {
      setNoteText(currentNote.text);
    } else {
      setNoteText('');
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentNote.id) {
      updateNote({
        id: currentNote.id,
        text: noteText
      });
    } else {
      addNote({
        text: noteText
      });
    }
    setNoteText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        required
      />
      <button type="submit">{currentNote.id ? 'Update Note' : 'Add Note'}</button>
    </form>
  );
}

export default Noteform;