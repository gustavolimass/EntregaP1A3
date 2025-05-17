import CabecalhoCliente from "../../../components/CabecalhoCliente/CabecalhoCliente.jsx";
import styles from "./InicioCliente.module.css";
function InicioCliente() {
  return (
    <>
      <CabecalhoCliente/>
      <h1 className={styles.titulo}>Página Principal do Cliente</h1>
    </>
  );
}

export default InicioCliente;
