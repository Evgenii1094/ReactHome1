import Navigation from "../../components/navigation/Navigation.js";
import MainBlock from "../../components/mainBlock/MainBlock";
import About from "../../components/about/About.js";
import InfoCard from '../../components/infoCard/InfoCard';
import Footer from "../../components/footer/Footer";

import backgroundImg from '../../resources/our-coffee-bg.png';
import cardCoffee from '../../resources/card-coffee.jpg';
import '../../style/header.scss';

const ExCoffee = () => {
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
                noLine
                title='About It'
                classImage='is-detail'
                aboutImg={cardCoffee}>
                <InfoCard/>
            </About>
            <Footer/>
        </div>
    )
}

export default ExCoffee;