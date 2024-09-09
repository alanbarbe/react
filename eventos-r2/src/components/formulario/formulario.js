import React, { useState, useEffect } from 'react';
import './formulario.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contrasena: ''
  });

  const [errores, setErrores] = useState({});
  const [datosEnviados, setDatosEnviados] = useState(null);
  const [formularioValido, setFormularioValido] = useState(false);

  const validarCampo = (nombre, valor) => {
    let error = '';
    switch (nombre) {
      case 'nombre':
        if (valor.length < 3) {
          error = 'El nombre debe tener al menos 3 caracteres';
        }
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(valor)) {
          error = 'El email no es válido';
        }
        break;
      case 'contrasena':
        if (valor.length < 6) {
          error = 'La contraseña debe tener al menos 6 caracteres';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    const error = validarCampo(name, value);
    setErrores(prevErrores => ({
      ...prevErrores,
      [name]: error
    }));
  };

  useEffect(() => {
    // Comprobar si hay algún error en el formulario
    const noHayErrores = Object.values(errores).every(error => !error);
    const todosCamposLlenos = Object.values(formData).every(valor => valor.trim() !== '');

    // Solo habilitar el formulario si no hay errores y todos los campos están llenos
    setFormularioValido(noHayErrores && todosCamposLlenos);
  }, [errores, formData]);

  const manejarEnvio = (e) => {
    e.preventDefault();
    const nuevosErrores = {};
    let esFormularioValido = true;

    // Validar todos los campos antes de enviar
    Object.keys(formData).forEach(campo => {
      const error = validarCampo(campo, formData[campo]);
      if (error) {
        nuevosErrores[campo] = error;
        esFormularioValido = false;
      }
    });

    setErrores(nuevosErrores);

    if (esFormularioValido) {
      setDatosEnviados(formData);
    } else {
      setDatosEnviados(null);
    }
  };

  return (
  <div className="componente">
    <div className="formulario">
      <h2 className="formulario__titulo">Formulario de Registro</h2>
      <form onSubmit={manejarEnvio} className="formulario__form">
        <div className="formulario__campo">
          <label htmlFor="nombre" className="formulario__etiqueta">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={manejarCambio}
            className="formulario__input"
          />
          {errores.nombre && <p className="formulario__error">{errores.nombre}</p>}
        </div>
        <div className="formulario__campo">
          <label htmlFor="email" className="formulario__etiqueta">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={manejarCambio}
            className="formulario__input"
          />
          {errores.email && <p className="formulario__error">{errores.email}</p>}
        </div>
        <div className="formulario__campo">
          <label htmlFor="contrasena" className="formulario__etiqueta">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={formData.contrasena}
            onChange={manejarCambio}
            className="formulario__input"
          />
          {errores.contrasena && <p className="formulario__error">{errores.contrasena}</p>}
        </div>
        <button type="submit" className="formulario__boton" disabled={!formularioValido}>
          Enviar
        </button>
      </form>
      {datosEnviados && (
        <div className="formulario__datos-enviados">
          <h3>Datos enviados:</h3>
          <p><strong>Nombre:</strong> {datosEnviados.nombre}</p>
          <p><strong>Email:</strong> {datosEnviados.email}</p>
          <p><strong>Contraseña:</strong> {datosEnviados.contrasena.replace(/./g, '*')}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Formulario;
