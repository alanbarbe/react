import React, { useState } from 'react';
import './botones.css';

const Botones = () => {
  const [textStyle, setTextStyle] = useState({ fontSize: '16px', color: '#000' });
  const [bgColor, setBgColor] = useState('#fff');
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8b00ff'];

  const handleButtonClick = (action) => {
    switch(action) {
      case 'size-increase':
        setTextStyle((prev) => ({ ...prev, fontSize: '30px' }));
        break;
      case 'size-decrease':
        setTextStyle((prev) => ({ ...prev, fontSize: '12px' }));
        break;
      case 'color-red':
        setTextStyle((prev) => ({ ...prev, color: 'red' }));
        break;
      case 'color-blue':
        setTextStyle((prev) => ({ ...prev, color: 'blue' }));
        break;
      case 'bg-dark':
        setBgColor('#333');
        break;
      case 'bold':
        setTextStyle((prev) => ({ ...prev, fontWeight: 'bold' }));
        break;
      case 'italic':
        setTextStyle((prev) => ({ ...prev, fontStyle: 'italic' }));
        break;
      case 'underline':
        setTextStyle((prev) => ({ ...prev, textDecoration: 'underline' }));
        break;
      case 'bg-rainbow':
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        setBgColor(colors[colorIndex]);
        break;
      case 'reset':
        setTextStyle({ fontSize: '20px', color: '#000' });
        setBgColor('#fff');
        break;
      default:
        break;
    }
  };

  return (
    <div className="botones-contenedor" style={{ backgroundColor: bgColor }}>
      <div className="botones">
        <button onClick={() => handleButtonClick('size-increase')}>Aumentar Tamaño</button>
        <button onClick={() => handleButtonClick('size-decrease')}>Disminuir Tamaño</button>
        <button onClick={() => handleButtonClick('color-red')}>Texto Rojo</button>
        <button onClick={() => handleButtonClick('color-blue')}>Texto Azul</button>
        <button onClick={() => handleButtonClick('bg-dark')}>Fondo Oscuro</button>
        <button onClick={() => handleButtonClick('bold')}>Texto Negrita</button>
        <button onClick={() => handleButtonClick('italic')}>Texto Cursiva</button>
        <button onClick={() => handleButtonClick('underline')}>Texto Subrayado</button>
        <button onClick={() => handleButtonClick('bg-rainbow')}>Fondo Arcoíris</button>
        <button onClick={() => handleButtonClick('reset')}>Restablecer</button>
      </div>
      <div className="texto-previo" style={textStyle}>
        Texto de Vista Previa
      </div>
    </div>
  );
};

export default Botones;
