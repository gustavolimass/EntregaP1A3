import styles from "./CriarProduto.module.css";
import CabecalhoRestaurante from "../../../components/CabecalhoRestaurante/CabecalhoRestaurante.jsx";
function CriarProduto() {
  return (
    <>
      <CabecalhoRestaurante/>
      <h1 className={styles.titulo}>Criar Produto</h1>
      <p className={styles.instrucao} >Preencha o formulário abaixo para adicionar <br /> um produto ao seu catálogo</p>

      <div className={styles.inputs}>
        <input type="text" placeholder="Nome" className={styles.texto}/>
        <input type="text" placeholder="Descrição" className={styles.texto} />
        <input type="text" placeholder="URL de uma foto" className={styles.texto}/>
        <input type="number" placeholder="Preço" className={styles.texto}/>
        <button type="button" className={styles.criar}>Criar</button>
      </div>

      

    </>
  );
}

export default CriarProduto;
