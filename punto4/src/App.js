import React, { useState } from 'react';
import './App.css';

const ListaTareas = () => {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = () => {
        if (nuevaTarea.trim() !== '') {
            setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
            setNuevaTarea('');
        }
    };

    const marcarCompletada = (indice) => {
        const nuevasTareas = tareas.map((tarea, i) => {
            if (i === indice) {
                return { ...tarea, completada: !tarea.completada };
            }
            return tarea;
        });
        setTareas(nuevasTareas);
    };

    const eliminarTarea = (indice) => {
        const nuevasTareas = tareas.filter((_, i) => i !== indice);
        setTareas(nuevasTareas);
    };

    return (
        <div className="lista-tareas-container">
            <h1>Lista de Tareas</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Agregar nueva tarea..."
                />
                <button onClick={agregarTarea}>Agregar</button>
            </div>
            <ul className="lista-tareas">
                {tareas.map((tarea, index) => (
                    <li key={index} className={`tarea-item ${tarea.completada ? 'completada' : ''}`}>
                        <span onClick={() => marcarCompletada(index)}>
                            {tarea.texto}
                        </span>
                        <button className="boton-eliminar" onClick={() => eliminarTarea(index)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaTareas;
