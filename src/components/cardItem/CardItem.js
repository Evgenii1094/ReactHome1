import React from 'react';
import { Link } from 'react-router-dom';

import '../../style/card.scss';

const CardItem = (props) => {
    const { img, descr, country, price } = props;

    return (
        <li className="card-item">
            <Link
                to={`/ExCoffee?descr=${descr}&country=${country}&price=${price}`}
                target='_blank'
                className='card-item__link'
            >
                <img className='card-item__img' src={img} alt="coffee" />
                <p className="card-item__descr">{descr}</p>
                {country && <p className='card-item__country'>{country}</p>}
                <p className="card-item__price">{price}$</p>
            </Link>
        </li>
    );
}

export default CardItem;