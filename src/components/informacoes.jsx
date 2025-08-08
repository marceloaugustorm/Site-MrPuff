import "../components/informacoes.css";
import Logo from "../assets/Logo.jpeg";


function Inform() {
  return (
    <div className="func-wrapper">
      
      <div className="func-section" >
        <h1 className="Funcionamento"><i class="bi bi-clock"></i> Horários de Funcionamento</h1>
        
        <h1 className="Horarios"> 
          <i class="bi bi-calendar" style={{color: '#E33D53'}}></i> Seg a Quinta: 11h - 20h
        </h1>

        <h1 className="Horarios"> 
          <i class="bi bi-calendar" style={{ color: '#E33D53' }}></i> Sexta e Sábado 11h ás 21h
        </h1>

        <h1 className="Horarios">
        <i className="bi bi-calendar" style={{ color: '#E33D53' }}></i> Domingo 11h às 18h
        </h1>

      </div>
            <a className="button_link" href="https://ul.waze.com/ul?place=ChIJxcp-xFFpzpQRRdtbr-jwub8&ll=-23.67361620%2C-
      46.51326270&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="blank" >Nos encontre</a>
    </div>
  );
}

export default Inform;
