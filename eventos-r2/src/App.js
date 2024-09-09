import React from 'react';
import GaleriaImg from './components/galeria-img/galeria-img.js';
import Formulario from './components/formulario/formulario.js';
import JuegoAdivinanza from './components/adivinar-num/adivinar-num.js';
import Botones from './components/botones/botones.js';
import Notas from './components/notas/notas.js';
function App() {
  return (
    <div className="App">
      <main>
        <GaleriaImg />
        <Formulario />
        <JuegoAdivinanza />
        <Botones />
        <Notas />
      </main>
    </div>
  );
}

export default App;