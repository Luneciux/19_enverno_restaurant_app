import styles from './Itens.module.scss';
import itens from './itens.json';

import Item from './Item';

function Itens() {
    return (
        <div className={styles.itens}>
            {
                itens.map(item => (
                    <Item 
                        key={item.id}
                        {...item}
                    />
                ))
            }
        </div>
    )
}

export default Itens;

