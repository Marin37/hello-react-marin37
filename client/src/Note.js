import React, { useState } from 'react';

const Note = ({ _id, initialTitle, initialText, removeNote, updateNote }) => {
  
  // Estados del titulo y texto
  const [title, setTitle] = useState(initialTitle);
  const [text, setText] = useState(initialText);
  
  // Estado editable NO por ahora
  const [editable, setEditable] = useState(false);

  // HANDLERS que hacer con las notas
  const handleSave = () => {
    updateNote(_id, title, text);
    setEditable(!editable);
  };

  // CSS override por bootstrap
  const inputStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: 1.25+'rem',
    marginBottom: 0.75+'rem'
  };
  const textareaStyle = {
    backgroundColor: 'transparent',
    border: 'none'
  };

  return (
    <div className="card">
      <div className="card-body">

        <input 
          style={inputStyle}
          spellCheck={false}
          disabled={!editable}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows={5}
          style={textareaStyle}
          spellCheck={false}
          disabled={!editable}
          value={text}
          onChange={(e) => setText(e.target.value)}
        >
        </textarea>
        <br/>
        <button className="btn" hidden={editable} onClick={() => setEditable(!editable)}>
          <i className="text-secondary fa fa-pencil fa-lg"></i>
        </button>

        <button className="btn" hidden={!editable} onClick={handleSave}>
          <i className="text-secondary fa fa-save fa-lg"></i>
        </button>

        <button className="btn" onClick={() => removeNote(_id)}>
          <i className="text-danger fa fa-trash fa-lg"></i>
        </button>

      </div>
    </div>
  );
};

export default Note;