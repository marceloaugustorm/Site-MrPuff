import React, { useEffect } from "react";
import videomrpuff from "../assets/video mrpuff.mp4";
import fotomapa from "../assets/fotomapa.png";
import "./video.css";

const Video = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="video-wrapper">

            

            {/* Seção do Vídeo */}
            <div className="video-title">
                <h2>Nosso Espaço MrPuff</h2>
                <video src={videomrpuff} autoPlay muted loop className="video-frame" />
                  {/* Seção de Avaliações Google via Elfsight */}
            
            </div>



            

            

            {/* Seção do Mapa Waze */}
            <div style={{ textAlign: 'center', margin: '50px 0' }}>
                <h2 style={{ color: 'white' }}>Localização no Waze</h2>
                <img src={fotomapa} alt="Mapa estático da localização" />
                <br />
                <a className="mapa"
                    href="https://www.waze.com/en/live-map/directions/br/sp/av.-dom-pedro-i,-1004?place=ChIJXwpN295pzpQRtksKtzydMoQ"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    📍 Abrir no Waze
                </a>

            
        
            </div>

          

        </div>
    );
};

export default Video;
