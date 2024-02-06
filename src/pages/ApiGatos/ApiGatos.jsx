import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ApiGatos.module.css';

const ApiGatos = () => {
    const [gatoImagens, setgatoImagens] = useState([]);
    useEffect(() => {
        axios.get('https://api.thecatapi.com/v1/images/search?limit=15')
        .then(response => {
            setgatoImagens(response.data);
        })
        .catch(error => {
            console.error('Erro ao obter imagens de gatos:', error);
        });
    }, []);
    return (
        <>
        <div className={styles.header}>
            <h1>
                Prepare-se para um desfile de fofura felina! 😺✨
            </h1>
        </div>
        <div className={styles.gatoCards}>
            {gatoImagens.map(gato => (
            <div key={gato.id} className={styles.card}>
                <img src={gato.url} alt="Gato" />
            </div>
        ))}
        </div>
        </>
  );
};

export default ApiGatos;