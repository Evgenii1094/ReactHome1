import React from 'react';
import Navigation from "../../components/navigation/Navigation.js";
import MainBlock from "../../components/mainBlock/MainBlock";
import About from "../../components/about/About";
import CardList from '../../components/cardList/CardList';
import Footer from "../../components/footer/Footer";

import backgroundImg from '../../resources/our-coffee-bg.png';
import card from '../../resources/card-3.png';
import about from '../../resources/about-img1.jpg';
import '../../style/header.scss';

const OurCoffee = () => {
    const cardArr = [
        {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'},
        {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99'},
        {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99'},
        {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'},
        {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'},
        {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99'}
    ]

    return(
        <div className="app">
            <section 
            className="header is-no-home"
            style={{ backgroundImage: `url('${backgroundImg}')` }}>
                <header>
                    <Navigation/>
                </header>
                <MainBlock title='Our Coffee'/>
            </section>
            <About 
            img
            title='About our beans'
            isImage
            aboutImg={about}
            descrFirst='Extremity sweetness difficult behaviour he of. On disposal 
            of as landlord horrible.'
            descrSecond='Afraid at highly months do things on at. Situation 
            recommend objection do intention so questions. As greatly removed 
            calling pleased improve an. Last ask him cold feel met spot shy want. 
            Children me laughing we prospect answered followed. At it went is song 
            that held help face.'/>
            <section className="card is-white">
                <div className="card__wrapper">
                    <CardList card={cardArr} filter/>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default OurCoffee;