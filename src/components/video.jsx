import React, { useEffect } from "react";
import videomrpuff from "../assets/video mrpuff.mp4";
import fotomapa from "../assets/fotomapa.png";
import "./video.css";

const Video = () => {
  return (
    <div className="video-wrapper">
    

    

      {/* Seção do Vídeo */}

      <div className="video-title">
        <video src={videomrpuff} autoPlay muted loop className="video-frame" />
      </div>
    

         {/* Trustindex widget no local correto */}
      <div>
        <h2 className="invertido" >Nosso Espaço</h2>
        <h2 className="hidden-title">Nosso Espaço</h2>
        <div src="https://cdn.trustindex.io/loader.js?2356b23514d10190a166e5b7646"></div>
        
      </div>
      


      {/* Seção do Mapa Waze
      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <h2 style={{ color: "white" }}>Localização no Waze</h2>
        <img src={fotomapa} alt="Mapa estático da localização" />
        <br />
        <a
          className="mapa"
          href="https://www.waze.com/en/live-map/directions/br/sp/av.-dom-pedro-i,-1004?place=ChIJXwpN295pzpQRtksKtzydMoQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 Abrir no Waze
        </a>
      </div> */}
    </div>
  );
};

export default Video;
