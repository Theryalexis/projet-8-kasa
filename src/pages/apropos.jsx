import React from 'react';
import bannerapropos from "../assets/banniereapropos.png";
import "../style/pages/apropos.scss";
import "../style/components/collapse.scss";
import collapseData from "../data/collapse.json";
import Collapse from "../components/collapse";

const apropos = () => {
    
    return (
        <div>
            <div className='banner_apropos'>
                <img src={bannerapropos} alt='bannerapropos' />
            </div>
            <div class="about-collapse">
                {collapseData.map((item) => (
                    <Collapse key={item.id} title={item.title} content={item.content} />
                ))}
            </div>
        </div>
    );
};

export default apropos;