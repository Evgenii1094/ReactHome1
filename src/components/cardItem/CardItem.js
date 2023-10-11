import '../../style/card.scss';

const CardItem = (props) => {
    const {img, descr, country, price} = props;
    const countryName = <p className='card-item__country'>{country}</p>;

    return(
        <li className="card-item">
            <img className='card-item__img' src={img} alt="coffee" />
            <p className="card-item__descr">{descr}</p>
            {country ? countryName : null}
            <p className="card-item__price">{price}$</p>
        </li>
    )
}

export default CardItem;