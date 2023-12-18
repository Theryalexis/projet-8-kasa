import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="error">
            <h1 className="error-title"> 404 </h1>
            <h3 className="error-text"> Oups! La page que vous demandez n'existe pas.</h3>
            <div>
                <Link to="/"> 
                    Retournez sur la page d'accueil
                </Link>
            </div>
        </div>
    );
};

export default NotFound;