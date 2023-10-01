import CardItem from '../cardItem/CardItem';
import CoffeeFilter from '../coffee-filter/CoffeeFilter';

import './../card/card.scss';

const CardList = (props) => {
    const elements = props.card.map((item, i) => {
        return(
            <CardItem
                    key={i}
                    img={item.img}
                    descr={item.descr}
                    country={item.country}
                    price={item.price}
                />
        )
    })

    return(
        <>
            {props.filter ? <CoffeeFilter/> : null}
            <ul className="card__list">
                {elements}
            </ul>
        </>
    )
}

export default CardList;