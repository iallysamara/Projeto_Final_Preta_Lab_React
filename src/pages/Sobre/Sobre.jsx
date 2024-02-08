import React, { useState, useEffect } from 'react';
import Foto_perfil_Ially_Silva from '../../assets/Foto_perfil_Ially_Silva.png';
import Banner_Meu_Aprendizado from '../../assets/Banner_Meu_Aprendizado.png';
import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <>
      <div className={styles.header}>
        <div>
          <img className={styles.headerImg} src={Foto_perfil_Ially_Silva} alt="Foto de Perfil" />
        </div>
      </div>

      <div className={styles.containerSobre}>
        <h1 className={styles.nomeCompleto}>Ially Samara da Silva</h1>
        <h2 className={styles.profissao}>Engenheira de Dados</h2>
        <p className={styles.sobreMim}>
          Sou uma mulher em busca de sua melhor versão, buscando sempre aprender/ensinar, realizar e vencer os desafios dessa vida e incentivar outras pessoas.
          <br />
          Atuo na área de dados desde 2017, que foi quando eu ingressei na área de TI profissionalmente. Essa foi a área onde eu mais me identifiquei,
          tratar e transformar dados em informação é uma das minhas maiores paixões e me vejo trabalhando nessa área a longo prazo.
          <br />
          Na formação básica da Pretalab eu pude ter um intensivão na área de Front-end, programando em HTML, CSS, Java Script e React. Esse curso me permitiu ter uma perspectiva de
          um futuro com mais oportunidades, é uma área que desejo me dedicar.
          <br />
          Embora não tenha concluído o curso de Análise e Desenvolvimento de Sistemas (ADS), mantenho-me constantemente atualizada, participando de cursos e bootcamps para
          adquirir novos conhecimentos, aprimorar minhas habilidades existentes e aprofundar meu domínio técnico. Estou comprometida com a minha evolução profissional e
          determinada a alcançar meus objetivos na área de tecnologia
        </p>
      </div>

      <div className={styles.containerAprendizado}>
        <h2 className={styles.aprendizado}> Meu aprendizado na Formação Básica da Pretalab </h2>
        <img className={styles.aprendizadoImg} src={Banner_Meu_Aprendizado} alt="Banner com a trilha de aprendizado no curso da PretaLab" />
      </div>
    </>
  )
}

export default Sobre;
