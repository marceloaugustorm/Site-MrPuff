import { useState } from "react";
import img1 from "../assets/Imagem 1.png";
import img2 from "../assets/Imagem 2.png";
import img3 from "../assets/Imagem 3.png";
import "../components/carrossel.css";

const imagens = [img1, img2, img3];

export default function Div_carrosel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % imagens.length);
  const prevSlide = () => setIndex((index - 1 + imagens.length) % imagens.length);

  return (
    <div className="carrossel-container" data-index={index}>
      <button onClick={prevSlide} className="btn_prev">◀</button>
      <div className="imagens_carrosel">
        <img src={imagens[0]} alt="Imagem 1" />
        <img src={imagens[1]} alt="Imagem 2" />
        <img src={imagens[2]} alt="Imagem 3" />
      </div>
      <button onClick={nextSlide} className="btn_next">▶</button>
    </div>
  );
}
