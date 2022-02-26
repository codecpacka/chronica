import './App.css';
import Navbar from './components/Navbar/Navbar'
import React from 'react';
import NewBirthRecord from "./containers/New Records/NewBirthRecord"
import NewDeathRecord from "./containers/New Records/NewDeathRecord"
import AssociateImage from "./containers/New Records/AssociateImage"

function App() {
  return (
    <>
      <Navbar />
      {/* <NewBirthRecord/> */}
      {/* <NewDeathRecord/> */}
      <AssociateImage/>

    </>
    
  );
}

export default App;
