import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import tareas from '../data/tareas';

const DetalleTarea = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tarea = tareas.find(t => t.id === parseInt(id));

  if (!tarea) return <p>Tarea no encontrada</p>;

  return (
    <div className="container">
      <h1>{tarea.title}</h1>
      <p><strong>Descripción:</strong> {tarea.description}</p>
      <p><strong>Creada el:</strong> {tarea.createdAt}</p>
      <p><strong>Estado:</strong> {tarea.completed ? 'Completa' : 'Incompleta'}</p>

      {/* Botón para volver a la lista de tareas */}
      <button className="volver" onClick={() => navigate('/')}>Volver a la lista</button>
    </div>
  );
};

export default DetalleTarea;
