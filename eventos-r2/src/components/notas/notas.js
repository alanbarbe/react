import React, { useState, useEffect } from 'react';
import './notas.css';

const Notas = () => {
  const [nota, setNota] = useState('');
  const [timer, setTimer] = useState(null);

  const handleChange = (event) => {
    setNota(event.target.value);

    // Limpiar el temporizador anterior
    if (timer) {
      clearTimeout(timer);
    }

    // Establecer un nuevo temporizador
    setTimer(setTimeout(() => {
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
      <textarea
        className="nota-area"
        value={nota}
        onChange={handleChange}
        placeholder="Escribe tu nota aquí..."
      />
    </div>
  );
};

export default Notas;
