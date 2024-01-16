import React from 'react';
import Banner_home from "../assets/bannierehome.png";
import Cards from '../components/Cards';

const home = () => {
    return (
        <div>
            <div className="container_home">
                <h1>Chez vous, partout et ailleurs</h1>
                <img src={Banner_home} alt='Banner_home' />
            </div>
            <Cards />
        </div>
    );
};

export default home;