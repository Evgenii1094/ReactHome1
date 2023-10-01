import whiteCoffee from '../../resources/coffee-white-decor.png';
import blackCoffee from '../../resources/coffee-black-decor.png';

import './coffeeDecor.scss';

const CoffeeDecor = (props) => {
    const defaultName = "coffee-decor";
    const modName = defaultName + " is-black";

    return (
        <div className={props.name ? defaultName : modName}>
            <img src={props.white ? whiteCoffee : blackCoffee} alt="decor" />
        </div>
    )
}

export default CoffeeDecor;