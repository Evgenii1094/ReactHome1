import Title from '../title/Title';
import CardList from '../cardList/CardList';

import './card.scss';
import card1 from '../../resources/card-1.png';
import card2 from '../../resources/card-2.png';
import card3 from '../../resources/card-3.png';

const Card = () => {
    const cardArr = [
        {img: card1, descr: 'Solimo Coffee Beans 2 kg', price: '10.73'},
        {img: card2, descr: 'Presto Coffee Beans 1 kg', price: '15.99'},
        {img: card3, descr: 'AROMISTICO Coffee 1 kg', price: '6.99'}
    ]

    return(
        <section className='card'>
            <div className="card__wrapper">
                <Title title="Our Best"/>
                <CardList card={cardArr}/>
            </div>
        </section>
    )
}

export default Card;