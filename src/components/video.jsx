import React, { useEffect } from "react";
import videomrpuff from "../assets/video mrpuff.mp4";
import fotomapa from "../assets/fotomapa.png";
import "./video.css";

const Video = () => {
  return (
    <div className="video-wrapper">
    

        {/* Trustindex widget no local correto */}
      <div>
        <div src="https://cdn.trustindex.io/loader.js?2356b23514d10190a166e5b7646"></div>

      {/* Seção do Vídeo */}

      <div className="video-title">
        <video src={videomrpuff} autoPlay muted loop className="video-frame" />
      
    



        <div  className="miniMapa" style={{ textAlign: "center"}}>
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
      </div>
      </div>

          
        
      </div>

    
      

    </div>
  );
};

export default Video;