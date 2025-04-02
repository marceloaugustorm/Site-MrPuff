import "../components/informacoes.css";
import Waze from "../assets/waze.png";
import Logo from "../assets/Logo.jpeg";

function Inform() {
  return (
    <div className="Teste">
        <h1 className="Funcionamento">Funcionamos Todos os dias</h1>
        <h1 className="Horarios">Seg a Quinta: 11h - 20h
        <p>Sexta e Sábado 11h ás 21h</p>
        <p>Domingo 11h ás 18h</p>
      </h1>

      <a className="localizacao" 
          href="https://www.waze.com/en/live-map/directions/br/sp/r.-dom-pedro-i,-1004?place=ChIJIR5LOQYxxpQRwKsMs2aFHxs" 
          target="_blank" 
          rel="noopener noreferrer">

          <img className="waze" src={Waze} alt="" />
          Nos encontre Aqui
      </a>

      <img  className="Logo" src={Logo} alt="" />
    </div>
  );
}

export default Inform;
