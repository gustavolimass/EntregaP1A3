import CabecalhoCliente from "../../../components/CabecalhoCliente/CabecalhoCliente.jsx";
import styles from "./Perfil.module.css";
function Perfil() {
  return (
    <>
      <CabecalhoCliente/>
      <h1 className={styles.titulo}>Página de Perfil do Cliente</h1>
    </>
  );
}

export default Perfil;
