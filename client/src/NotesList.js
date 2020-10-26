import React from 'react';
import Note from './Note';

const NotesList = ({ notes, deleteNote, updateNote}) => {

  return (
    <div className="card-columns">
      {notes.map((note) => (
        <Note 
          id={note._id}
          key={note._id}
          initialTitle={note.title}
          initialText={note.text}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      ))}
    </div>
  );
};

export default NotesList;