import "../components/informacoes.css";
import Waze from "../assets/waze.png";
import Logo from "../assets/Logo.jpeg";

function Inform() {
  return (
    <div className="Teste1">
        <h1 className="Funcionamento">Funcionamos Todos os dias</h1>
        <h1 className="Horarios"> Seg a Quinta: 11h - 20h</h1>
        <h1 className="Horarios" >Sexta e Sábado 11h ás 21h</h1>
        <h1 className="Horarios" >Domingo 11h ás 18h</h1>
        <h1 className="Local">Av Dom Pedro I, 1004</h1>
  
      <img  className="Logo" src={Logo} alt="" />
    </div>
  );
}

export default Inform;
