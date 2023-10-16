import React from 'react';
// import { Link } from 'react-router-dom';

import './navigation.scss';

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <a href="/">Coffee house</a>
                </li>
                <li className='nav__item'>
                    <a href="/OurCoffee">Our coffee</a>
                </li>
                <li className='nav__item'>
                    <a href="/OurPleasure">For your pleasure</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;