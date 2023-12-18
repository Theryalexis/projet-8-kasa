import React from 'react';
import "../style/components/header.scss"
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import logoKasa from "../assets/LOGO.svg"

const Header = () => {
    return (
        <div>
            <Link to={'/'} className="logo-container">
                <img className="logo-img" src={logoKasa} alt="logo kasa" />
            </Link>
            <div className="navigation">
                <ul className='navigation-container'>
                    <NavLink to={'/'} className={({ isActive }) =>
                    isActive ? "nav-link nav-link-active" : "nav-link"
                    }>
                        Accueil
                    </NavLink>
                    <NavLink to={"/apropos"} className={({ isActive }) =>
                    isActive ? "nav-link nav-link-active" : "nav-link"
                    }>
                        A propos
                    </NavLink>                    
                </ul>
            </div>
        </div>
    );
};

export default Header;