import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss';

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <Link to="/">Coffee house</Link>
                </li>
                <li className='nav__item'>
                    <Link to="/OurCoffee">Our coffee</Link>
                </li>
                <li className='nav__item'>
                    <Link to="/OurPleasure">For your pleasure</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;