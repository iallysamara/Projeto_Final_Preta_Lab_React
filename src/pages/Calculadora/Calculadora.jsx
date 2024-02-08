import React, { useState } from 'react';
import styles from './Calculadora.module.css';

const Calculadora = () => {
  const [numero1Soma, setNumero1Soma] = useState('');
  const [numero2Soma, setNumero2Soma] = useState('');
  const [resultadoSoma, setResultadoSoma] = useState('');

  const [numero1Sub, setNumero1Sub] = useState('');
  const [numero2Sub, setNumero2Sub] = useState('');
  const [resultadoSub, setResultadoSub] = useState('');

  const [numero1Mult, setNumero1Mult] = useState('');
  const [numero2Mult, setNumero2Mult] = useState('');
  const [resultadoMult, setResultadoMult] = useState('');

  const [numero1Div, setNumero1Div] = useState('');
  const [numero2Div, setNumero2Div] = useState('');
  const [resultadoDiv, setResultadoDiv] = useState('');

  const somar = () => {
    const num1 = parseFloat(numero1Soma);
    const num2 = parseFloat(numero2Soma);
    const resultado = num1 + num2;
    setResultadoSoma(resultado);
  };

  const subtrair = () => {
    const num1 = parseFloat(numero1Sub);
    const num2 = parseFloat(numero2Sub);
    const resultado = num1 - num2;
    setResultadoSub(resultado);
  };

  const multiplicar = () => {
    const num1 = parseFloat(numero1Mult);
    const num2 = parseFloat(numero2Mult);
    const resultado = num1 * num2;
    setResultadoMult(resultado);
  };

  const dividir = () => {
    const num1 = parseFloat(numero1Div);
    const num2 = parseFloat(numero2Div);
    const resultado = num1 / num2;
    setResultadoDiv(resultado);
  };

  const limpar = () => {
    setNumero1Soma('');
    setNumero2Soma('');
    setResultadoSoma('');

    setNumero1Sub('');
    setNumero2Sub('');
    setResultadoSub('');

    setNumero1Mult('');
    setNumero2Mult('');
    setResultadoMult('');

    setNumero1Div('');
    setNumero2Div('');
    setResultadoDiv('');
  };

  return (
    <div className={styles.calculadora}>
      <div className={styles.card}>
      <h1>Calculadora Básica</h1>
      <div className={styles.container}>
        <div className={styles.inputGroup}>
          <input type="number" value={numero1Soma} onChange={(e) => setNumero1Soma(e.target.value)} />
          <input type="number" value={numero2Soma} onChange={(e) => setNumero2Soma(e.target.value)} />
          <button onClick={somar}>Somar</button>
          <p>Resultado Soma: {resultadoSoma}</p>
        </div>
        <div className={styles.inputGroup}>
          <input type="number" value={numero1Sub} onChange={(e) => setNumero1Sub(e.target.value)} />
          <input type="number" value={numero2Sub} onChange={(e) => setNumero2Sub(e.target.value)} />
          <button onClick={subtrair}>Subtrair</button>
          <p>Resultado Subtração: {resultadoSub}</p>
        </div>
        <div className={styles.inputGroup}>
          <input type="number" value={numero1Mult} onChange={(e) => setNumero1Mult(e.target.value)} />
          <input type="number" value={numero2Mult} onChange={(e) => setNumero2Mult(e.target.value)} />
          <button onClick={multiplicar}>Multiplicar</button>
          <p>Resultado Multiplicação: {resultadoMult}</p>
        </div>
        <div className={styles.inputGroup}>
          <input type="number" value={numero1Div} onChange={(e) => setNumero1Div(e.target.value)} />
          <input type="number" value={numero2Div} onChange={(e) => setNumero2Div(e.target.value)} />
          <button onClick={dividir}>Dividir</button>
          <p>Resultado Divisão: {resultadoDiv}</p>
        </div>
      </div>
      <p>
      <button onClick={limpar}>Limpar</button>
      </p>
      </div>
    </div>
  );
}

export default Calculadora;
