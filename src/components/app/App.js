import { Component } from "react";

import Navigation from "../navigation/Navigation";
import MainBlock from "../mainBlock/MainBlock";
import Title from '../title/Title';
import CardList from '../cardList/CardList';
import About from "../about/About";
import Footer from "../footer/Footer";

import card1 from '../../resources/card-1.png';
import card2 from '../../resources/card-2.png';
import card3 from '../../resources/card-3.png';
import backgroundImg from '../../resources/main-bg.jpg';
import './app.scss';
import '../../style/header.scss';
import '../../style/card.scss';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {img: card1, descr: 'Solimo Coffee Beans 2 kg', price: '10.73', id: 1},
                {img: card2, descr: 'Presto Coffee Beans 1 kg', price: '15.99', id: 2},
                {img: card3, descr: 'AROMISTICO Coffee 1 kg', price: '6.99', id: 3}
            ]
        }
    }

    render() {
        return (
            <div className="app">
                <section 
                className="header">
                    <header>
                        <Navigation/>
                    </header>
                    <MainBlock 
                    img={backgroundImg}
                    title='Everything You Love About Coffee'
                    descr/>
                </section>
                <About
                    title='About Us'
                    descrFirst='Extremity sweetness difficult behaviour he of. On disposal 
                    of as landlord horrible. Afraid at highly months do things
                    on at. Situation recommend objection do intention so questions. 
                    As greatly removed calling pleased improve an. Last ask him cold 
                    feel met spot shy want. Children me laughing we prospect answered 
                    followed. At it went is song that held help face.'
                    descrSecond='Now residence dashwoods she excellent you. Shade being under
                    his bed her, Much read on as draw. Blessing for ignorant exercise
                    any yourself unpacked. Pleasant horrible but confined day end marriage. 
                    Eagerness furniture set preserved far recommend. Did even but nor are 
                    most gave hope. Secure active living depend son repair day ladies now.'/>
                <section className='card'>
                    <div className="card__wrapper">
                        <Title title="Our Best"/>
                        <CardList card={this.state.data}/>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
  }
  
  export default App;
  