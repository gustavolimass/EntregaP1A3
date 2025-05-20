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
  function criarProduto(){
    navigate("/restaurante/criarproduto")
  }
  return (
    <>
      <h1 className={styles.titulo}>Página de Login do Usuário Restaurante</h1>
      <button onClick={entrar}>Entrar</button>
      <button onClick={irParaCadastro}>Criar conta</button>
      <button onClick={voltar}>Voltar</button> 
      <button onClick={criarProduto}>Criar Produto</button> 

    </>
  );
}

export default LoginRestaurante;
