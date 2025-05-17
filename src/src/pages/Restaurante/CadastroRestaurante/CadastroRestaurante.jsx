import styles from './CadastroRestaurante.module.css'
import { useNavigate } from 'react-router-dom'
function CadastroRestaurante() {
  const navigate = useNavigate();
  function registrar() {
    navigate("/restaurante/login");
  }
  function irParaLogin() {
    navigate("/restaurante/login");
  }
  return (
    <>
      <h1 className={styles.titulo}>Página de Cadastro do Restaurante</h1>
      <button onClick={registrar}>Registrar</button>
      <button onClick={irParaLogin}>Conecte-se</button>
    </>
  )
}

export default CadastroRestaurante;
