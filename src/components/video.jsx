import React, { useEffect } from "react";
import videomrpuff from "../assets/video mrpuff.mp4";
import fotomapa from "../assets/fotomapa.png";
import "./video.css";
import Reviews from "./Reviews"


const Video = () => {
  return (
    <div className="video-wrapper">
  
      <div>
      {/* Seção do Vídeo */}

      <div className="video-title">
        <video src={videomrpuff} autoPlay muted loop className="video-frame" />
         <Reviews/>
      </div>
 
        
      </div>
     
      

    </div>
  );
};

export default Video;