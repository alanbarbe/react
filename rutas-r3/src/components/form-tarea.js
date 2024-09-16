import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tareas from '../data/tareas';

const FormTarea = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      id: tareas.length + 1,
      title,
      description,
      createdAt: new Date().toISOString().split('T')[0],
      completed,
    };
    tareas.push(nuevaTarea); // push
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Crear Nueva Tarea</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Descripción:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
          Completa
        </label>
        <button type="submit">Guardar</button>
      </form>

      {/* Botón para volver a la lista de tareas */}
      <button onClick={() => navigate('/')}>Volver a la lista</button>
    </div>
  );
};

export default FormTarea;
