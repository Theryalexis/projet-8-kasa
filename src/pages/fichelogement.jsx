import { useParams } from 'react-router-dom';
import React from 'react';
import logements from "../data/logement.json";
import Carrousel from '../components/carrousel';
import Rating from '../components/rating';
import Collapse from "../components/collapse";
import Tags from '../components/tags';


const Fichelogement = () => {
    const { id } = useParams();
    const selectedData = logements.find((item) => item.id === id);
    const { rating } =selectedData;
    const data = selectedData.equipments.map((equipment, index) => (
        <div key={index}>{equipment}</div>
      ))

    return (
        <div className='container_fichelogement'>
            <Carrousel pictures={selectedData.pictures} title={selectedData.title} />
            <div className='container_infos'>
                <div className='logement_infos'>
                    <div className='logement_title'>
                        <h1>{selectedData.title}</h1>
                        <p className='logement_location'>{selectedData.location}</p>
                    </div>
                <div className='container_tags'>
                    {selectedData.tags.map((tag, index) => (
                    <Tags key={index} description={tag} className='appartment__tag' />
                    ))}
                </div>
              </div>
                <div className='container_hostrating'>
                    <div className='host'>
                        <span className='host_name'>{selectedData.host.name}</span>
                        <img className='host_pict' src={selectedData.host.picture} alt="hôte" />
                    </div>
                <div className='container_rating'>
                <Rating rating={rating} />
                </div>
                </div>
            </div>  
            <div className="container_content">
                <Collapse  key={selectedData} title="Description" content={selectedData.description} />
                <Collapse  key={selectedData} title="Description" content={data} />
            </div>
        </div>
    );
};

export default Fichelogement;