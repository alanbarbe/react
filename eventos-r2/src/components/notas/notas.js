import React, { useState, useEffect, useRef } from 'react';
import './notas.css';

const Notas = () => {
  const [nota, setNota] = useState('');
  const [historial, setHistorial] = useState([]);
  const [timer, setTimer] = useState(null);
  const notaRef = useRef(nota); // Referencia para mantener el valor más reciente

  useEffect(() => {
    notaRef.current = nota; // Actualizar la referencia en cada render
  }, [nota]);

  const handleChange = (event) => {
    setNota(event.target.value);

    // Limpiar el temporizador anterior
    if (timer) {
      clearTimeout(timer);
    }

    // Establecer un nuevo temporizador
    setTimer(setTimeout(() => {
      // Utilizar la referencia para obtener el valor más reciente de la nota
      const nuevaNota = notaRef.current;
      // Guardar la nota en el historial, manteniendo solo las últimas 2
      setHistorial(prevHistorial => [nuevaNota, ...prevHistorial].slice(0, 2));
      // Aquí puedes agregar lógica para guardar la nota en un backend o localStorage
      console.log('Nota guardada:', nuevaNota);
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
