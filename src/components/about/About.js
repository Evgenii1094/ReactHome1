import Title from '../title/Title';
import CoffeeDecor from '../coffeeDecor/CoffeeDecor';

import './about.scss';

const About = (props) => {
    const {img, descrFirst, descrSecond, title, aboutImg, classImage} = props;
    return(
        <section className={img ? `about ${classImage}` : 'about'}>
            {img ?
                <div className="about__column">
                    <img className='about__picture' src={aboutImg} alt="about" />
                </div> : null
            }
            <div className="about__column">
                <Title title={title}/>
                <CoffeeDecor/>
                <p className="about__descr">{descrFirst}</p>
                <p className="about__descr">{descrSecond}</p>
                {props.children}
            </div>
        </section>
    )
}

export default About;