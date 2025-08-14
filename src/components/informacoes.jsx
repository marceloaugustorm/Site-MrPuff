import "../components/informacoes.css";

function Inform() {
  return (
    <div className="inform-container">
      {/* Coluna esquerda */}
      <div className="info-left">
        <div className="func-section">
          <h1 className="Funcionamento">
            <i className="bi bi-clock"></i> Horários de Funcionamento
          </h1>

          <h1 className="Horarios">
            <i className="bi bi-calendar" style={{ color: "#E33D53" }}></i> Segunda a Quinta: 11h - 20h
          </h1>

          <h1 className="Horarios">
            <i className="bi bi-calendar" style={{ color: "#E33D53" }}></i> Sexta e Sábado 11h - 21h
          </h1>

          <h1 className="Horarios">
            <i className="bi bi-calendar" style={{ color: "#E33D53" }}></i> Domingo 11h - 18h
          </h1>
        </div>

        <div className="func-section">
          <h1 className="Funcionamento">
            <i className="bi bi-geo-alt-fill"></i> Localização
          </h1>

          <h1 className="Horarios">
            <i className="bi bi-calendar" style={{ color: "#E33D53" }}></i> Av Dom Pedro I, 1004 - Vila América - Santo André
          </h1>

          <div className="navigation-buttons">
            <a
              className="nav-button waze-button"
              href="https://ul.waze.com/ul?place=ChIJxcp-xFFpzpQRRdtbr-jwub8&ll=-23.67361620%2C-46.51326270&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.21.0/waze.svg" alt="Waze" className="app-icon waze-icon" />
              Waze
            </a>

            <a
              className="nav-button maps-button"
              href="https://maps.app.goo.gl/LVpkcCCtvowZAeRr8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="Google Maps" className="app-icon" />
              Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Coluna direita - Mapa */}
      <div className="map-right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.065618596331!2d-46.51583762458618!3d-23.673611265725814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6951c47ecac5%3A0xbfb9f0e8af5bdb45!2sMr.%20Puff%20-%20Adega%20e%20Tabacaria!5e0!3m2!1spt-BR!2sbr!4v1755191746297!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa Mr. Puff"
        ></iframe>
      </div>
    </div>
  );
}

export default Inform;