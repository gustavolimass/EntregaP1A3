import styles from "./InicioRestaurante.module.css";
import CabecalhoRestaurante from "../../../components/CabecalhoRestaurante/CabecalhoRestaurante.jsx";
import restaure from "../../../assets/restaure.png"
export default function InicioRestaurante() {
  return (
    <>
      <CabecalhoRestaurante />
      <h1 className={styles.titulo}>Meu Restaurante</h1>

      <div className={styles.restaurante}>

        <section className={styles.secao}>
          <h3 className={styles.nome}>Nome do restaurante:</h3> 
          <h3 className={styles.texto}>Cantina Bergamaschi Montanari Villas</h3>
        </section>

        <section className={styles.secao2}>
          <h3 className={styles.nome}>Imagem:</h3>
          <img src={restaure} alt="Imagem do restaurante" /> 
        </section>
        
        <section className={styles.opcoes}>
          <button type="button" className={styles.botaoMudar}>Mudar Nome</button>
          <button type="button" className={styles.botaoMudar}>Mudar Imagem</button>
          <button type="button" className={styles.botaoExcluir}>Apagar Restaurante</button>
        </section>
        
        
        
          
      </div>
    </>
  );
}