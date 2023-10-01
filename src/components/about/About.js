import Title from '../title/Title';
import CoffeeDecor from '../coffeeDecor/CoffeeDecor';

import './about.scss';

const About = (props) => {
    const {img, descrFirst, descrSecond, title, aboutImg, isImage} = props;
    const image = 'is-image';
    return(
        <section className={isImage ? `about ${image}` : 'about'}>
            {img ?
                <div className="about__column">
                    <img src={aboutImg} alt="about" />
                </div> : null
            }
            <div className="about__column">
                <Title title={title}/>
                <CoffeeDecor/>
                <p className="about__descr">{descrFirst}</p>
                <p className="about__descr">{descrSecond}</p>
            </div>
        </section>
    )
}

export default About;