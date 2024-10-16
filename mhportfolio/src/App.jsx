import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./header";
import Body from "./Body";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <Header />
        <Body />
      </Router>
    </>
  )
}

export default App
