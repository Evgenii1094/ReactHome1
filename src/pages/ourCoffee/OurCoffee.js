import { React, Component } from 'react';
import Navigation from "../../components/navigation/Navigation.js";
import MainBlock from "../../components/mainBlock/MainBlock";
import About from "../../components/about/About";
import CardList from '../../components/cardList/CardList';
import Footer from "../../components/footer/Footer";
import SearchPanel from '../../components/searchPanel/SearchPanel.js';
import CoffeeFilter from '../../components/coffee-filter/CoffeeFilter.js';

import backgroundImg from '../../resources/our-coffee-bg.png';
import card from '../../resources/card-3.png';
import about from '../../resources/about-img1.jpg';
import '../../style/header.scss';

class OurCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {img: card, descr: 'Bbb', country: 'Brazil', price: '6.99', id: 1},
                {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99', id: 2},
                {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99', id: 3},
                {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99', id: 4},
                {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99', id: 5},
                {img: card, descr: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99', id: 6}
            ],
            term: '', 
            filter: 'all'
        }
    }

    searchCoffee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.descr.indexOf(term) > -1 
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterCoffee = (items, filter) => {
        switch (filter) {
            case 'All':
                return items;
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            default: 
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterCoffee(this.searchCoffee(data, term), filter);
        return(
            <div className="app">
                <section 
                className="header is-no-home">
                    <header>
                        <Navigation/>
                    </header>
                    <MainBlock img={backgroundImg} title='Our Coffee'/>
                </section>
                <About 
                img
                classImage='is-image'
                title='About our beans'
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
                        <CardList 
                        card={visibleData}>
                            <CoffeeFilter filter={filter} onFilterSelect={this.onFilterSelect}>
                                <div className="filter__item">
                                    <label htmlFor="filter-search" className='filter__title is-cursor'>Lookiing for</label>
                                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                                </div> 
                            </CoffeeFilter>
                        </CardList>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default OurCoffee;