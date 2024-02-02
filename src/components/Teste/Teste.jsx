import styles from './Teste.module.css';

function Teste(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>
                Que dia mais lindo! Estou fazendo meu projeto de React!!
            </p>
        </div>
    )
}

export default Teste;