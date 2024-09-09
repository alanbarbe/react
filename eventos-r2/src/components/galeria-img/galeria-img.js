import React, { useState, useEffect } from 'react';
import './galeria-img.css';

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="galeria-img__icon">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="galeria-img__icon">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const GaleriaImg = () => {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPA-DQK3tD09YVS7m0hkR3MV7PRlr464fiw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9lK4DTbqDQmwpiPmcfFmEv-ACoAG0KS3R6A&s',
    'https://img.freepik.com/fotos-premium/postre-plato-postres-chocolate-frutas_885186-354.jpg',
    'https://wallpapercave.com/wp/wp9305259.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OJ3AlCEtF_bm48kURRZRIh7F56NwbNSttw&s'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      changeImage(-1);
    } else if (event.key === 'ArrowRight') {
      changeImage(1);
    }
  };

  const changeImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="galeria-img">
      <h1 className="galeria-img__title">Galería de Imágenes</h1>
      <div className="galeria-img__container">
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className="galeria-img__image"
        />
        <div className="galeria-img__overlay">
          <div className="galeria-img__counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
        <button 
          onClick={() => changeImage(-1)} 
          className="galeria-img__button galeria-img__button--left"
        >
          <ChevronLeft />
        </button>
        <button 
          onClick={() => changeImage(1)} 
          className="galeria-img__button galeria-img__button--right"
        >
          <ChevronRight />
        </button>
      </div>
      <p className="galeria-img__instructions">
        Use las teclas de flecha izquierda y derecha o los botones para navegar
      </p>
    </div>
  );
};

export default GaleriaImg;