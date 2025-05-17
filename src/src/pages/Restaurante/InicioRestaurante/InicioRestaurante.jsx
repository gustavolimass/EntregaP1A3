import styles from "./InicioRestaurante.module.css";
import CabecalhoRestaurante from "../../../components/CabecalhoRestaurante/CabecalhoRestaurante.jsx";
function InicioRestaurante() {
  return (
    <>
      <CabecalhoRestaurante />
      <h1 className={styles.titulo}>Página Principal do Usuário Restaurante</h1>
    </>
  );
}

export default InicioRestaurante;
