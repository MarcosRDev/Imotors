import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/home";
import NewCar  from './components/NewCar';
import InfoCar from './components/CarInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/new" element={<NewCar />} />
        <Route path="/car/info/:id" element={<InfoCar />} />

       
      </Routes>
    </Router>
  );
}

export default App;