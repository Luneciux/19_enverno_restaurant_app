import Search from './Search';
import Filters from './Filters';
import {ReactComponent as Logo} from 'assets/images/logo.svg'

import styles from './Menu.module.scss';
import { useState } from 'react';
import Order from './Order';

function Menu() {

    const [searchString, setSearchString] = useState("");
    const [filter, setFilter] = useState<number | null>(null);

    return (
        <main>
            <nav className={styles.menuStyle}>
                <Logo />
            </nav>
            <header className={styles.headerStyle}>
                <div className={styles.headerStyle__text}>
                    Massas & Restaurante
                </div>
            </header>
            <section className={styles.foodsStyle}>
                <h3 className={styles.foodsStyle__titulo}>Cardápio</h3>
                <Search 
                    searchString={searchString} 
                    setSearchString={setSearchString}
                />
                <div className={styles.foodsStyle__filters}>
                    <Filters 
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <Order />
                </div>
            </section>
        </main>
    )
}

export default Menu;