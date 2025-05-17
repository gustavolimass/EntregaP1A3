import styles from "./CriarProduto.module.css";
import CabecalhoRestaurante from "../../../components/CabecalhoRestaurante/CabecalhoRestaurante.jsx";
function CriarProduto() {
  return (
    <>
      <CabecalhoRestaurante/>
      <h1 className={styles.titulo}>Criar Produto</h1>
    </>
  );
}

export default CriarProduto;
