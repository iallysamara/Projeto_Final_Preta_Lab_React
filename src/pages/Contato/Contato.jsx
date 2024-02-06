import styles from './Contato.module.css';
import Woman_cell from '../../assets/Woman_cell.png';
import { useState } from 'react';


const Contato = () =>{
    return(
        <>
          <div className={styles.header}>
            <h1>
              Entre em contato
            </h1>
            <img src={Woman_cell} />
            </div>
        </>
    )
}

export default Contato;
