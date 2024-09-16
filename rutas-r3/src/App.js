import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaTareas from './components/lista-tarea';
import DetalleTarea from './components/detalle-tarea';
import FormTarea from './components/form-tarea';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaTareas />} />
        <Route path="/task/:id" element={<DetalleTarea />} />
        <Route path="/create" element={<FormTarea />} />
      </Routes>
    </Router>
  );
};

export default App;
