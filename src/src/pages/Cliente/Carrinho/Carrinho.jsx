import CabecalhoCliente from "../../../components/CabecalhoCliente/CabecalhoCliente.jsx";
import styles from "./Carrinho.module.css";
function Carrinho() {
  return (
    <>
      <CabecalhoCliente/>
      <h1 className={styles.titulo}>Carrinho</h1>
    </>
  );
}

export default Carrinho;
