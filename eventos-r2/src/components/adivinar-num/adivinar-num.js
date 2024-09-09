import React, { useState } from 'react';
import './adivinar-num.css';

const JuegoAdivinanza = () => {
  const [numeroAleatorio] = useState(Math.floor(Math.random() * 100) + 1);
  const [mensaje, setMensaje] = useState('');
  const [intento, setIntento] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(intento, 10);
    if (num > numeroAleatorio) {
      setMensaje('El número es más bajo');
    } else if (num < numeroAleatorio) {
      setMensaje('El número es más alto');
    } else {
      setMensaje('¡Correcto! Adivinaste el número.');
    }
  };

  return (
    <div className="container-adivinanza">
      <div className="juego-adivinanza">
        <h1>Juego de Adivinanza</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="guess">Adivina un número entre 1 y 100:</label>
          <input
            type="number"
            id="guess"
            value={intento}
            onChange={(e) => setIntento(e.target.value)}
          />
          <button type="submit">Adivinar</button>
        </form>
        {mensaje && <p className="mensaje">{mensaje}</p>}
      </div>
    </div>
  );
};

export default JuegoAdivinanza;
