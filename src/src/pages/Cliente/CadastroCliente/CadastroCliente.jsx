//import './CadastroCliente.css'
import { useNavigate } from 'react-router-dom'
import styles from "./CadastroCliente.module.css"
function CadastroCliente() {
  const navigate = useNavigate();
  function registrar() {
    navigate("/cliente/login");
  }
  function irParaLogin() {
    navigate("/cliente/login");
  }
  return (
    <>
      <h1 className={styles.titulo}>Cadastro Cliente</h1>
      <button onClick={registrar}>Registrar</button>
      <button onClick={irParaLogin}>Conecte-se</button>
    </>
  )
}

export default CadastroCliente;
