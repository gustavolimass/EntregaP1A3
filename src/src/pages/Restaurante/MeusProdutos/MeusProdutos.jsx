import styles from "./MeusProdutos.module.css";
import CabecalhoRestaurante from "../../../components/CabecalhoRestaurante/CabecalhoRestaurante.jsx";
function MeusProdutos() {
  return (
    <>
      <CabecalhoRestaurante/>
      <h1 className={styles.titulo}>Meus Produtos</h1>
    </>
  );
}

export default MeusProdutos;
