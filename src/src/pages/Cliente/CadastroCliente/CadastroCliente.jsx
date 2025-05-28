import styles from './CadastroCliente.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../../assets/logo.png';

function CadastroCliente() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [erro, setErro] = useState('');

  function registrar(e) {
    e.preventDefault();

    if (!email || !senha || !confirmaSenha) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (senha.length <= 6) {
      setErro("A senha deve ter mais de 6 caracteres.");
      return;
    }

    if (senha !== confirmaSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    // Simulação de cadastro bem-sucedido
    navigate("/cliente/login");
  }

  function irParaLogin() {
    navigate("/cliente/login");
  }

  return (
    <div className={styles.container}>
      <div className={styles.formulario}>
        <h2>Cadastro Clientes</h2>

        <form onSubmit={registrar} className={styles.form}>
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
          <input
            className={styles.input}
            type="password"
            placeholder="confirmar senha"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
          />

          {erro && <p className={styles.erro}>{erro}</p>}

          <button type="submit" className={styles.botao}>
            Cadastrar
          </button>
        </form>

        <hr className={styles.divisor} />

        <p className={styles.linkCadastro}>
          Já possui uma conta?{' '}
          <span className={styles.criar} onClick={irParaLogin}>
            Login
          </span>
        </p>
      </div>

      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo Unifood" className={styles.logo} />
        <h1 className={styles.unifood}>UNIFOOD</h1>
        <p className={styles.subtitulo}>Para Clientes</p>
      </div>
    </div>
  );
}

export default CadastroCliente;
