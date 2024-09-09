import React, { useState, useEffect } from 'react';
import './notas.css';

const Notas = () => {
  const [nota, setNota] = useState('');
  const [historial, setHistorial] = useState([]);
  const [timer, setTimer] = useState(null);

  const handleChange = (event) => {
    setNota(event.target.value);

    // Limpiar el temporizador anterior
    if (timer) {
      clearTimeout(timer);
    }

    // Establecer un nuevo temporizador
    setTimer(setTimeout(() => {
      // Guardar la nota en el historial, manteniendo solo las últimas 2
      setHistorial(prevHistorial => [nota, ...prevHistorial].slice(0, 2));
      // Aquí puedes agregar lógica para guardar la nota en un backend o localStorage
      console.log('Nota guardada:', nota);
    }, 2000)); // Guarda después de 2 segundos de inactividad
  };

  useEffect(() => {
    // Limpiar el temporizador cuando el componente se desmonte
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  return (
    <div className="notas-contenedor">
      <div className="nota-seccion">
        <textarea
          className="nota-area"
          value={nota}
          onChange={handleChange}
          placeholder="Escribe tu nota aquí..."
        />
      </div>
      <div className="historial-seccion">
        <h2>Historial de Notas</h2>
        <ul className="historial-lista">
          {historial.map((item, index) => (
            <li key={index} className="historial-item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notas;
