import CreateNote from './CreateNote';
import Note from './Note';
import '../css/Note.css';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const BASE_URL = 'http://localhost:8000';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(true);

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
    fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputText }),
    })
      .then((res) => res.json())
      .then((data) => {
        setNotes((prevState) => [...prevState, data]);
        setInputText('');
      });
  };
  const deleteNote = (id) => {
    fetch(`${BASE_URL}/notes/${id}`, {
      method: 'DELETE',
    }).then(() => {
      const filteredNotes = notes.filter((note) => note._id !== id);
      setNotes(filteredNotes);
    });
  };
  useEffect(() => {
    setLoading(true);
    // const data = JSON.parse(localStorage.getItem('Notes'));
    fetch(`${BASE_URL}/notes`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setNotes(data);
        }
        setLoading(false);
      });
  }, []);

  //   useEffect(() => {
  //     if (!loading) {
  //       localStorage.setItem('Notes', JSON.stringify(notes));
  //     }
  //   }, [notes, loading]);
  return (
    <div className='notes'>
      {notes.map((note) => (
        <Note key={note._id} note={note} deleteNote={deleteNote} />
      ))}

      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
};

export default Notes;
