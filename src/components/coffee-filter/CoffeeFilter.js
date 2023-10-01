import './coffee-filter.scss';

const CoffeeFilter = () => {
    const country = ['Brazil', 'Kenya', 'Columbia'];
    const buttons = country.map(item => {
        return(
            <button className="filter__btn">{item}</button>
        )
    });
    return(
        <div className="filter">
            <div className="filter__item">
                <label htmlFor="filter-search" className='filter__title is-cursor'>Lookiing for</label>
                <input 
                    type="text"
                    id="filter-search"
                    className="filter__search"
                    placeholder="start typing here..."/>
            </div>
            <div className="filter__item">
                <span className="filter__title">Or filter</span>
                {buttons}
            </div>
        </div>
    )
}

export default CoffeeFilter;