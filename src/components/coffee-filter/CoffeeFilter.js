import './coffee-filter.scss';

const CoffeeFilter = (props) => {

    const country = [
        {name: 'All'},
        {name: 'Columbia'},
        {name: 'Brazil'},
        {name: 'Kenya'}
    ];
    const buttons = country.map(({name}) => {
        const active = props.filter === name;
        const activeClass = active ? 'is-active' : '';

        return(
            <button 
            className={`filter__btn ${activeClass}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)}>
                {name}
            </button>
        )
    });
    return(
        <div className="filter">
            {props.children}
            <div className="filter__item">
                <span className="filter__title">Or filter</span>
                {buttons}
            </div>
        </div>
    )
}

export default CoffeeFilter;