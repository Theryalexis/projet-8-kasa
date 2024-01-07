import { useState } from 'react';
import ArrowOpen from '../assets/arrow_back_ios-24px 2.png';
import "../style/components/collapse.scss";

const DropDown = ({ title, content, description }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const clickOnArrow = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`dropdown-container ${isOpen ? "open" : ""}`}>
        <div className="headband">
          <div className="dropdown-title">{title}</div>
          <div className={`dropdown-arrow ${isOpen ? "rotate" : ""}`}>
            <img src={ArrowOpen} alt="Flèche vers le haut"  onClick={clickOnArrow} />
          </div>
        </div>
        <div className={`content ${isOpen ? "open" : ""}`}>
          <div className="content-text">{content}</div>
          <div className="description-text">{description}</div>
        </div>
      </div>
    );
};

export default DropDown;