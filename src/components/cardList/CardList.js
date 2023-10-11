import CardItem from '../cardItem/CardItem';

import '../../style/card.scss';

const CardList = (props) => {
    const elements = props.card.map((item) => {
        return(
            <CardItem
                    key={item.id}
                    img={item.img}
                    descr={item.descr}
                    country={item.country}
                    price={item.price}
                />
        )
    })

    return(
        <>
            {props.children}
            <ul className="card__list">
                {elements}
            </ul>
        </>
    )
}

export default CardList;