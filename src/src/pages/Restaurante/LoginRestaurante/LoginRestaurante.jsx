import styles from './LoginRestaurante.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';

function LoginRestaurante() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // Aqui você pode validar o email/senha antes de navegar
    navigate("/restaurante/inicio");
  }

  function irParaCadastro() {
    navigate("/restaurante/cadastro");
  }

  return (
    <div className={styles.container}>
      <div className={styles.formulario}>
        <h2>Login Restaurante</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            className={styles.input}
            type="email"
            placeholder="email@restaurante.com"
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
            Entrar
          </button>
        </form>
        <p className={styles.linkCadastro}>
          <hr className={styles.divisor} />
          Não possui uma conta?{' '}
          <span className={styles.criar} onClick={irParaCadastro}>
            Cadastrar
          </span>
        </p>
      </div>

      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo Unifood" className={styles.logo} />
        <h1 className={styles.unifood}>UNIFOOD</h1>
        <p className={styles.subtitulo}>Para restaurantes</p>
      </div>
    </div>
  );
}

export default LoginRestaurante;
