import React from 'react';
import "../style/components/carrousel.scss"
import flechegauche from "../assets/Vectorgauche.png";
import flechedroite from "../assets/Vectordroit.png";
import { useState } from 'react';

const Carrousel = ({ pictures, title }) => {
  
    const picture = pictures.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const pictureCounter = `${currentIndex + 1} / ${picture}`   
  

    const prevPicture = () => {
      const prevIndex = currentIndex - 1
      setCurrentIndex(prevIndex < 0 ? picture - 1 : prevIndex);      
    };

    const nextPicture = () => {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex >= picture ? 0 : nextIndex);      
    };

    const currentPicture = pictures[currentIndex];
    if (pictures.length === 1) {
        return (
            <section className="carrousel">
                <img src={currentPicture} alt="logement" className="carrouselPicture" />
            </section>
        );
    }   
  
    return (
      <div className="carrousel">
        <img src={currentPicture} alt={title} className="carrouselPicture"/>
        <img src={flechegauche} alt="Flèche gauche" onClick={prevPicture} className="arrow left-arrow" />
        <img src={flechedroite} alt="Flèche droite" onClick={nextPicture} className="arrow right-arrow" />    
        <div className="counter">{pictureCounter}</div>
      </div>
    );
    
};

export default Carrousel;