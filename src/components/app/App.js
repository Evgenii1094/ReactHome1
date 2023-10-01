import Navigation from "../navigation/Navigation";
import MainBlock from "../mainBlock/MainBlock";
import About from "../about/About";
import Card from "../card/Card";
import Footer from "../footer/Footer";

import backgroundImg from '../../resources/main-bg.jpg';
import './app.scss'
import '../../style/header.scss';


const App = () => {
    return (
        <div className="app">
            <section 
            className="header"
            style={{ backgroundImage: `url('${backgroundImg}')` }}>
                <header>
                    <Navigation/>
                </header>
                <MainBlock 
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
            <Card/>
            <Footer/>
        </div>
    );
  }
  
  export default App;
  