import { useState } from "react";
import { Pencil } from "lucide-react";
import styles from "./MeusProdutos.module.css";

const Funcao = () => {
  const [imagemUrl, setImagemUrl] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  const alterarImagem = () => {
    const novaUrl = prompt("Cole a URL da nova imagem:");
    if (novaUrl) setImagemUrl(novaUrl);
  };

  const editarCampo = (valorAtual, setValor, campo) => {
    const novoValor = prompt(`Digite o novo ${campo}:`, valorAtual);
    if (novoValor !== null) {
      if (campo === "preço") {
        const numero = parseFloat(novoValor.replace(",", "."));
        if (!isNaN(numero)) {
          const valorFormatado = numero.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
          setValor(valorFormatado);
        } else {
          alert("Digite um valor válido!");
        }
      } else {
        setValor(novoValor);
      }
    }
  };

  return (
    <main>
      <h1 className={styles.titulo}>Meus Produtos</h1>
      <div className={styles.produtoContainer}>
        
        {/* Coluna da imagem */}
        <div className={styles.colunaImagem}>
          <img src={imagemUrl} alt="Produto" className={styles.imagemProduto} />
          <button onClick={alterarImagem} className={styles.botaoImagem}>
            Alterar imagem
          </button>
        </div>

        {/* Coluna da descrição */}
        <div className={styles.colunaTexto}>
          <div className={styles.itemTexto}>
            <strong>Nome:</strong>
            <span>{nome || ""}</span>
            <Pencil size={14} className={styles.editar} onClick={() => editarCampo(nome, setNome, "nome")} />
          </div>

          <div className={styles.itemTexto}>
            <strong>Descrição:</strong>
            <span>{descricao || ""}</span>
            <Pencil size={14} className={styles.editar} onClick={() => editarCampo(descricao, setDescricao, "descrição")} />
          </div>

          <div className={styles.itemTexto}>
            <strong>Preço:</strong>
            <span>{preco || ""}</span>
            <Pencil size={14} className={styles.editar} onClick={() => editarCampo(preco, setPreco, "preço")} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Funcao;
