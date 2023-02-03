import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import styles from './Order.module.scss';
import options from './options.json';
import classNames from 'classnames';

function Order () {
    const [open, setOpen] = useState(false);

    return (
        <button 
            className={styles.orderStyle} 
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
        >
            <span>Ordenar Por</span>
            {open ? < MdKeyboardArrowUp size={20}/> : < MdKeyboardArrowDown size={20}/>}
            <div 
                className={classNames({
                    [styles.orderStyle__options]: true,
                    [styles['orderStyle__options--active']]: open,
                })}
                
            >{
                options.map(option => (
                    <div className={styles.orderStyle__option} key={option.value}>
                        {option.nome}
                    </div>
                ))
            }</div>
        </button>
    )
}

export default Order;