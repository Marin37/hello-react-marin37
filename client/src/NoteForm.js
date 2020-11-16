import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {

  // Valores vacíos para el texto del form
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  // Que hacer en submit o enviar
  const handleSubmit = e => {
    e.preventDefault();
    addNote({
      title: title,
      text: text
    });
    // Limpiar el formulario
    setTitle('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Título</label>
        <input
          _id="title"
          className="form-control"
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Texto</label>
        <textarea
          _id="text"
          className="form-control"
          value={text}
          rows="4"
          onChange={e => setText(e.target.value)}
        >
        </textarea>
      </div>
      <input
        className="btn btn-primary"
        type="submit"
        value="Guardar"
      />
    </form>
  );
};

export default NoteForm;