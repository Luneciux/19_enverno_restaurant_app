import styles from './Filters.module.scss';
import filters from './filters.json';

interface Ioption {
    id: number,
    label: string
}

function Filters () {

    function selectFilter(option : Ioption){

    }

    return (
        <div className={styles.filtersStyle}>
            {filters.map((option) => (
                <button 
                    key={option.id}
                    onClick={() => selectFilter(option)}
                    className={styles.filtersStyle__filter}
                >
                    {option.label}
                </button>    
            ))}
        </div>
    )
}

export default Filters;