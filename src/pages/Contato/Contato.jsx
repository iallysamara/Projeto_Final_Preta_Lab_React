import { useState } from 'react';
import styles from './Contato.module.css';
import Woman_cell from '../../assets/Woman_cell.png';

const Contato = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const aoPreencherNome = (event) => {
        setNome(event.target.value);
    };

    const aoPreencherEmail = (event) => {
        setEmail(event.target.value);
    };

    const aoPreencherMensagem = (event) => {
        setMensagem(event.target.value);
    };

    const aoClicaBotao = () => {   
        setNome('');
        setEmail('');
        setMensagem('');
    };

    return (
        <>
            <div className={styles.header}>
                <h1>
                    Entre em contato
                </h1>
                <img src={Woman_cell} alt="Mulher no celular" />
            </div>

            <div className={styles.inputsContainer}>
                <input type="text" placeholder="Digite o seu nome" value={nome} onChange={aoPreencherNome} />
                <input type="email" placeholder="Digite o seu email" value={email} onChange={aoPreencherEmail} />
                <textarea placeholder="Digite uma mensagem" value={mensagem} onChange={aoPreencherMensagem}></textarea>
                <button className={styles.button} onClick={aoClicaBotao}>Enviar mensagem</button>
            </div>
        </>
    )
}

export default Contato;