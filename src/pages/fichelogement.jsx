import { useParams } from 'react-router-dom';
import React from 'react';
import logements from "../data/logement.json";
import Carrousel from '../components/carrousel';
import Rating from '../components/rating';
import Collapse from "../components/collapse";

const Fichelogement = () => {
    const { id } = useParams();
    const selectedData = logements.find((item) => item.id === id);
    const { rating } =selectedData;

    return (
        <div className='container_fichelogement'>
            <Carrousel pictures={selectedData.pictures} title={selectedData.title} />
            <div className='container_collapse'>
            <div className="container_collapse_1"><Collapse  key={selectedData} title="Description" content={selectedData.description} /></div>
            <div className="container_collapse_2"><Collapse  key={selectedData} title="Équipements" content={selectedData.equipments} /></div>
            </div>
            <div className="ratings">
                    <Rating rating={rating} />
             </div>
        </div>
    );
};

export default Fichelogement;