import "./TelaInicial.css";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  function irParaLoginDeCliente() {
    navigate("/cliente/login");
  }
  function irParaLoginDeRestaurante() {
    navigate("/restaurante/login");
  }
  return (
    <>
      <h1>Página inicial</h1>
      <p onClick={irParaLoginDeCliente}>Sou cliente</p>
      <p onClick={irParaLoginDeRestaurante}>Sou restaurante</p>
    </>
  );
}

export default App;
