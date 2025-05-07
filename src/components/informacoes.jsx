import "../components/informacoes.css";
import Logo from "../assets/Logo.jpeg";

function Inform() {
  return (
    <div className="Teste">
      <h1 className="Funcionamento">Funcionamos Todos os dias</h1>
      <h1 className="Horarios">
        ⚪ Seg a Quinta: 11h - 20h
        <p>⚪ Sexta e Sábado 11h ás 21h</p>
        <p>⚪ Domingo 11h ás 18h</p>
      </h1>
      <img className="Logo" src={Logo} alt="" />
    </div>
  );
}

export default Inform;
