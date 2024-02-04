import Foto_perfil_Ially_Silva from '../../assets/Foto_perfil_Ially_Silva.png'
import styles from './Sobre.module.css'

const Sobre = () => {
  return (
    <>
      <div className={styles.header}>
        <div>
            <img className={styles.headerImg} src={Foto_perfil_Ially_Silva} alt="Foto de Perfil" />
        </div>
      </div>

      <div className={styles.containerSobre} >
          <h1 className={styles.nomeCompleto}>Ially Samara da Silva</h1>
          <h2 className={styles.profissao}>Engenheira de Dados</h2>
          <p className={styles.sobreMim}>
              Sou uma mulher em busca de sua melhor versão, buscando sempre aprender/ensinar, realizar e vencer os desafios dessa vida e incentivar outras pessoas.
              Atuo na área de dados desde 2017, que foi quando eu ingressei na área de TI profissionalmente. Essa foi a área onde eu mais me identifiquei,
              tratar e transformar dados em informação é uma das minhas maiores paixões e me vejo trabalhando nessa área a longo prazo.
              Na formação básica da Pretalab eu pude ter um intensivão na área de Front-end, programando em HTML, CSS, Java Script e React. Esse curso me permitiu ter uma perspectiva de
              um futuro com mais oportunidades, é uma área que desejo me dedicar.
              Apesar de não ter concluído o curso de ADS, estou sempre me atualizando, fazendo cursos e bootecamps para aprender novas tecnologias, aperfeiçoar o que já domino e me apronfudar na parte técnica.
          </p>
      </div>
    </>
  )
}

export default Sobre;