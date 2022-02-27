import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import NewBirthRecord from "./containers/New Records/NewBirthRecord";
import NewDeathRecord from "./containers/New Records/NewDeathRecord";
import AssociateImage from "./containers/New Records/AssociateImage";
import NFDRecord from "./containers/New Records/NewFetalDeath";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/* <AssociateImage /> */}
      <Routes>
        {/* <Route path="/" element={<NewBirthRecord />} /> */}
        <Route path="/newbirthrecord" element={<NewBirthRecord />} />
        <Route path="/newdeathrecord" element={<NewDeathRecord />} />
        <Route path="/fetaldeath" element={<NFDRecord />} />
        <Route path="/associateimage" element={<AssociateImage />} />
      </Routes>
    </>
  );
}

export default App;
