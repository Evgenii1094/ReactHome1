import React from 'react';
import Navigation from "../../components/navigation/Navigation.js";
import MainBlock from "../../components/mainBlock/MainBlock";
import About from "../../components/about/About.js";
import CardList from '../../components/cardList/CardList';
import Footer from "../../components/footer/Footer";

import backgroundImg from '../../resources/our-pleasure-bg.png';
import card from '../../resources/card-3.png';
import about from '../../resources/about-img2.png';
import '../../style/header.scss';

const OurPleasure = () => {
    const cardArr = [
        {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99', id: 1},
        {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99', id: 2},
        {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99', id: 3},
        {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99', id: 4},
        {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99', id: 5},
        {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99', id: 6}
    ]

    return(
        <div className="app">
            <section 
            className="header is-no-home"
            style={{ backgroundImage: `url('${backgroundImg}')` }}>
                <header>
                    <Navigation/>
                </header>
                <MainBlock title='For your pleasure'/>
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
                    <CardList card={cardArr}/>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default OurPleasure;