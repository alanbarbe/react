import React, { useState } from 'react';
import './App.css';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');

    const manejarSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim() !== '') {
            setMensaje(`¡Bienvenido, ${nombre}!`);
            setNombre('');
        }
    };

    return (
        <div className="formulario-container">
            <form onSubmit={manejarSubmit} className="formulario">
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ingresa tu nombre..."
                    className="input-nombre"
                />
                <button type="submit" className="boton-submit">
                    Enviar
                </button>
            </form>
            {mensaje && <p className="mensaje-bienvenida">{mensaje}</p>}
        </div>
    );
};

export default Formulario;

