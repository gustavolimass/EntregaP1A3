import styles from "./TelaInicial.module.css";
import { useNavigate } from "react-router-dom";
function TelaInicial() {
  const navigate = useNavigate();
  function irParaLoginDeCliente() {
    navigate("/cliente/login");
  }
  function irParaLoginDeRestaurante() {
    navigate("/restaurante/login");
  }
  return (
    <>
      <h1 className={styles.titulo}>Tela Inicial do Site</h1>
      <button onClick={irParaLoginDeCliente}>Sou cliente</button>
      <button onClick={irParaLoginDeRestaurante}>Sou restaurante</button>
    </>
  );
}

export default TelaInicial;
