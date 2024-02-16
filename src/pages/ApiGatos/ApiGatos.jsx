import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ApiGatos.module.css';
import loadingGif from '../../assets/loading.gif';

const ApiGatos = () => {
    const [gatoImagens, setgatoImagens] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => {
            setgatoImagens(response.data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Erro ao obter imagens de gatos:', error);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
        <div className={styles.header}>
            <h1>
                Prepare-se para um desfile de fofura felina! 😺✨
            </h1>
        </div>
        {isLoading ? (
            <div className={styles.loading}>
                <p>Carregando imagens de gatinhos...</p>
                <img className={styles.img} src={loadingGif} alt="Carregando..." />   {/*Carregando imagens de gatinhos... */}
            </div>
        ) : (
            <div className={styles.gatoCards}>
                {gatoImagens.map(gato => (
                    <div key={gato.id} className={styles.card}>
                        <img src={gato.url} alt="Gato" />
                    </div>
                ))}
            </div>
        )}
        </>
    );
};

export default ApiGatos;
