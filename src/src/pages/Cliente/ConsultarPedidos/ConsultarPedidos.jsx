import CabecalhoCliente from "../../../components/CabecalhoCliente/CabecalhoCliente.jsx";
import styles from "./ConsultarPedidos.module.css";
function ConsultarPedidos() {
  return (
    <>
      <CabecalhoCliente/>
      <h1 className={styles.titulo}>Consultar Pedidos</h1>
    </>
  );
}

export default ConsultarPedidos;
