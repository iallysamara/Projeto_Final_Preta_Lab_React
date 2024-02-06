import { useState } from 'react';
import styles from './Comentarios.module.css';
import Comentario from '../../assets/Comentario.png';

const Comentarios = () => {
  const [novoComentario, setNovoComentario] = useState('');

  const handleChange = (event) => {
    setNovoComentario(event.target.value);
  };

  const handleClick = () => {
    // Aqui você pode fazer algo com o novoComentario, como enviar para o servidor
    console.log('Novo comentário:', novoComentario);
    // Limpa o campo de comentário
    setNovoComentario('');
  };

  return (
    <>
      <div className={styles.header}>
        <h1>
            Deixe o seu comentário
        </h1>
        <img src={Comentario} alt="Comentário" />
      </div>
      <div className={styles.commentBox}>
        <input
          type="text"
          value={novoComentario}
          onChange={handleChange}
          placeholder="Digite aqui..."
        />
        <button onClick={handleClick}>+</button>
      </div>
    </>
  );
};

export default Comentarios;