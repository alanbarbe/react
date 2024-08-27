import React, { useState } from 'react';
import './App.css';

const Contador = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);

    return (
        <div className="contador-container">
            <h1 className="contador-display">{contador}</h1>
            <div className="contador-botones">
                <button className="boton" onClick={incrementar}>
                    Incrementar
                </button>
                <button className="boton" onClick={decrementar}>
                    Decrementar
                </button>
            </div>
        </div>
    );
};

export default Contador;
