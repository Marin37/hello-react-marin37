import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import NotesList from './NotesList';
import NoteForm from './NoteForm';
import Footer from './Footer';

const App = () => {

  //    estado notas    Val inic = [Ø]
  const [notes, setNotes] = useState([]);

  // Fetch notas con el hook useEffect
  useEffect(() => {
    axios.get('/api/notes')
      .then(res => {
        setNotes(res.data.notes);
      });
  }, []);

  // Funciones del CRUD anteriores 
  // Crear nota
  const addNote = note => {
    axios.post('/api/notes', note)
      .then(res => {
        const newNotes = [res.data, ...notes];
        setNotes(newNotes);
      });
  };

  // Update nota
  const updateNote = (_id, title, text) => {
    const updatedNote = {
      title: title,
      text: text
    };
    axios.put(`/api/notes/${_id}`, updatedNote)
      .then(res => {
        const newNotes = notes.map(note =>
          note._id === _id ? updatedNote : note
        );
        setNotes(newNotes);
      });
  };

  // Borrar nota
  const removeNote = (_id) => {
        axios.delete(`/api/notes/${_id}`)
      .then(res => {
        const newNotes = notes.filter(note => note._id !== _id);
        setNotes(newNotes);
      });
  };

  return (
    <div> 
      <Header title='Notas'/>
      <div className="container mt-3">
        <NoteForm
          addNote={addNote}
        />
        <hr />
        <NotesList
          notes={notes}
          removeNote={removeNote}
          updateNote={updateNote}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default App;