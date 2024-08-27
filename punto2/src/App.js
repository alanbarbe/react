import './App.css';
import React from 'react';


const TarjetaPresentacion = ({ nombre, apellido, profesion, imagen }) => {
    return (
      <div className="tarjeta-presentacion-container">
        <div className="tarjeta-presentacion">
            <img src='https://i.pinimg.com/originals/66/9c/68/669c68af00d49891e2f3c78c539862da.png' alt="Perfil" className="imagen-perfil"/>
            <h2>Alan Barbé</h2>
            <p>Tecnico informático profesional y personal</p>
        </div>
      </div>
    );
};

export default TarjetaPresentacion;

