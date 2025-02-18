import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { Home } from './components/Home'
import { Routes, Route } from "react-router";
import About from './components/About'
import NoteState from './context/notes/NoteState'
import './App.css'

function App() {


  return (
    <>
      <NoteState>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </NoteState>

    </>
  )
}

export default App
