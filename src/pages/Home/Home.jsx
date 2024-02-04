import styles from './Home.module.css'
import BannerProjetoFinalReactPretaLab from '../../assets/BannerProjetoFinalReactPretaLab.png'
import TWO_BLACK_POWER from '../../assets/TWO_BLACK_POWER.png'
import Future from '../../assets/Future.png';


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
      <div className={styles.beneficios}>
    <section className={styles.content}>
      <div className={styles.cardsContainer}>
        <h2 className={styles.tituloCards}>Porque iniciei os estudos no Pretalab</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={TWO_BLACK_POWER} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Apoio</h3>
              <p className={styles.texto}>Recentemente, minha irmã expressou interesse em ingressar na área de tecnologia, 
              inspirada pelo meu trabalho em engenharia de dados. Ao ver o anúncio da nova turma de formação básica da 
              Pretalab, vi uma oportunidade única para apoiá-la nessa jornada. Decidi não apenas compartilhar essa 
              oportunidade com ela, mas também me comprometer em participar ativamente do curso. Além de fortalecer nosso vínculo 
              familiar, vejo esse compromisso como uma chance de ampliar meu próprio conhecimento e habilidades. 
              Acredito que essa experiência não só beneficiará minha irmã, mas também abrirá novas perspectivas e oportunidades para nós, fortalecendo nosso trajeto na área de tecnologia.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={Future} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Carreira</h3>
              <p className={styles.texto}>Busco aprender e dominar tanto linguagens de desenvolvimento back-end quanto front-end, 
              com o objetivo de contribuir significativamente para projetos colaborativos e também para desenvolver projetos 
              pessoais. Compreender o desenvolvimento front-end não apenas amplia meu conjunto de habilidades, mas também me 
              capacita a criar experiências de usuário envolventes e funcionais. A habilidade de trabalhar tanto no front-end 
              quanto no back-end me tornará mais versátil e valioso como profissional de tecnologia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
    </>
  )
}

export default Home;