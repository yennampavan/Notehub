import React from 'react';
import '../styles/Note.css';

const Note = ({ note, onDelete, onEdit }) => {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <div className="note-actions">
        <button onClick={() => onEdit(note.id)}>Edit</button>
        <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Note;
