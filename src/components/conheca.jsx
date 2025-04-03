import { useNavigate } from "react-router-dom";
import "./conheca.css";

function Conheca() {
  const navigate = useNavigate();
    
  return (
    <div>
        <h2>Sobre Nós</h2>
        <p>Aqui você pode colocar informações sobre sua empresa.</p>
    </div>
  );
}

export default Conheca;
