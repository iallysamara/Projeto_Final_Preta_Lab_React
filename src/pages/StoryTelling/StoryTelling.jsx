import styles from './StoryTelling.module.css';
import storytelling from '../../assets/storytelling.jpg';

const Storytelling = () => {
  return (
    <div className={styles.header}>
      <h1> Um pouco da minha história profissional</h1>
    <div>
    <img className={styles.headerImg} src={storytelling} alt="Foto de Perfil" />
    </div>
    </div>
  );
};

export default Storytelling;