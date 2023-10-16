import React from 'react';
import { useLocation } from 'react-router-dom';

import './info-card.scss';

const InfoCard = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const descr = queryParams.get('descr');
    const country = queryParams.get('country');
    const price = queryParams.get('price');

    return (
        <div className='info-card'>
            <p className="info-card__item">
                <span>Country: </span>
                {country !== 'undefined' ? country : 'Country of manufacture not specified'}
            </p>
            <p className="info-card__item">
                <span>Description: </span>
                {descr}
            </p>
            <p className="info-card__item is-price">
                <span>Price: </span>
                {price}$
            </p>
        </div>
    );
}

export default InfoCard;