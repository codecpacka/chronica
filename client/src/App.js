import './App.css';
import Navbar from './components/Navbar/Navbar'
import React from 'react';
import NewBirthRecord from "./containers/New Records/NewBirthRecord"
import NewDeathRecord from "./containers/New Records/NewDeathRecord"


function App() {
  return (
    <>
      <Navbar />
      {/* <NewBirthRecord/> */}
      <NewDeathRecord/>

    </>
    
  );
}

export default App;
