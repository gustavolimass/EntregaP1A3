import styles from './LoginCliente.module.css'
import { useNavigate } from 'react-router-dom'
function LoginCliente() {
  const navigate = useNavigate();
  function entrar() {
    navigate("/cliente/inicio");
  }
  function irParaCadastro() {
    navigate("/cliente/cadastro");
  }
  function voltar() {
    navigate("/");
  }
  return (
    <>
      <h1 className={styles.titulo}>Página de Login do Cliente</h1>
      <button onClick={entrar}>Entrar</button>
      <button onClick={irParaCadastro}>Criar conta</button>
      <button onClick={voltar}>Voltar</button>
    </>
  )
}

export default LoginCliente;
