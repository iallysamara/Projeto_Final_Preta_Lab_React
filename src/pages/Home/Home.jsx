import styles from './Home.module.css'
import BannerProjetoFinalReactPretaLab from '../../assets/BannerProjetoFinalReactPretaLab.png'


const Home = () => {
  return (
    <>
      <div className={styles.header}>
        <img src={BannerProjetoFinalReactPretaLab} />
      </div>
      <div className={styles.subtitulo}>
        <p>
          Esse é o site do projeto final do módulo de React do Ciclo formativo Básico da Pretalab.
          Projeto desenvolvido em React, contemplando todos os requisitos exigidos pela orientadora Amanda Silva e a monitora Amanda Gregório.
          <br/>
          <a class="link-formacao" href="https://www.canva.com/design/DAF7MCKi7jE/C1i7JzmO1Nn8sRqTpQttuA/view" target="_blank">Proposta do projeto com os requisitos obrigatórios e opcionais.</a>
        </p>
      </div>
    </>
  )
}

export default Home;