import React, { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';

function About() {
  const a = useContext(noteContext)
  return (
    <div>this is About {a.name} and he is in {a.class}</div>
  )
}

export default About