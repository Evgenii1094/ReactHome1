import CoffeeDecor from '../coffeeDecor/CoffeeDecor';
import './mainBlock.scss';

const MainBlock = (props) => {
    if (props.descr) {
        return (
            <div className="main-block">
                <h1 className='main-block__title'>{props.title}</h1>
                <CoffeeDecor white name/>
                <p className="main-block__descr">
                    <span>We makes every day full of energy and taste</span>
                    <span>Want to try our beans?</span>
                </p>
                <button className='main-block__btn'>More</button>
            </div>
        )
    } else {
        return(
            <div className="main-block">
                <h1 className='main-block__title'>{props.title}</h1>
            </div>
        )
    }
}

export default MainBlock;