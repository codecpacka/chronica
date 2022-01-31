import './App.css';
import Navbar from './components/Navbar/Navbar'
import React from 'react';
import NewBirthRecord from "./containers/New Records/NewBirthRecord"

function App() {
  return (
    <>
      <Navbar />
      <NewBirthRecord/>
    </>
    
  );
}

export default App;
