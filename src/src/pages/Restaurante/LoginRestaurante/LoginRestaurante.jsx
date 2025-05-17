import styles from "./LoginRestaurante.module.css";
import { useNavigate } from "react-router-dom";
function LoginRestaurante() {
  const navigate = useNavigate();
  function entrar() {
    navigate("/restaurante/inicio");
  }
  function irParaCadastro() {
    navigate("/restaurante/cadastro");
  }
  function voltar() {
    navigate("/");
  }
  return (
    <>
      <h1 className={styles.titulo}>Página de Login do Usuário Restaurante</h1>
      <button onClick={entrar}>Entrar</button>
      <button onClick={irParaCadastro}>Criar conta</button>
      <button onClick={voltar}>Voltar</button>

    </>
  );
}

export default LoginRestaurante;
