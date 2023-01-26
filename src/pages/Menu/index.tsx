import Search from './Search';
import {ReactComponent as Logo} from 'assets/images/logo.svg'

import styles from './Menu.module.scss';
import { useState } from 'react';

function Menu() {

    const [searchString, setSearchString] = useState("");

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
            </section>
        </main>
    )
}

export default Menu;