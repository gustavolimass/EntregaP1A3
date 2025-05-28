import styles from './LoginCliente.module.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../../../assets/logo.png';

function LoginCliente() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function logar(e) {
    e.preventDefault();

    // Exemplo simples de validação (substitua por lógica real ou API)
    if (email === '' || senha === '') {
      setErro("Preencha todos os campos");
      return;
    }

    // Simulação de login bem-sucedido
    navigate("/cliente/inicio");
  }

  function irParaCadastro() {
    navigate("/cliente/cadastro");
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formulario}>
          <h2>Login Clientes</h2>

          <form onSubmit={logar} className={styles.form}>
            <input
              className={styles.input}
              type="email"
              placeholder="email@cliente.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            {erro && <p className={styles.erro}>{erro}</p>}

            <button type="submit" className={styles.botao}>
              Login
            </button>
          </form>

          <hr className={styles.divisor} />

          <p className={styles.linkCadastro}>
            Não possui uma conta?{' '}
            <span className={styles.criar} onClick={irParaCadastro}>
              Cadastrar
            </span>
          </p>
        </div>

        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo Unifood" className={styles.logo} />
          <h1 className={styles.unifood}>UNIFOOD</h1>
          
          <p className={styles.subtitulo}>Para Clientes</p>
        </div>
      </div>
    </>
  );
}

export default LoginCliente;
