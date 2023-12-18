import React from 'react';
import bannerapropos from "../assets/banniereapropos.png";
import "../style/pages/apropos.scss"

const apropos = () => {
    return (
            <div className='banner_apropos'>
                <img src={bannerapropos} alt='bannerapropos' />
            </div>
    );
};

export default apropos;