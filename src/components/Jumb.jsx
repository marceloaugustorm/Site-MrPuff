import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Fundo1 from "../assets/imagem_fundo1.jpg";
import Fundo2 from "../assets/imagem_fundo2.jpg";
import Fundo3 from "../assets/imagem_fundo3.jpg";
import "./Jumb.css";

const Jumb = () => {
  return (
    <div className="container">
      <div className="jumb-wrapper rounded-3 mx-auto shadow">
        {/* Linha das imagens com textos */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          <div className="image-box" style={{ backgroundImage: `url(${Fundo1})` }}>
            <div className="image-overlay">Drinks</div>
          </div>
          <div className="image-box" style={{ backgroundImage: `url(${Fundo2})` }}>
            <div className="image-overlay">Hookah</div>
          </div>
          <div className="image-box" style={{ backgroundImage: `url(${Fundo3})` }}>
            <div className="image-overlay">Culture</div>
          </div>
        </div>

        {/* Texto geral */}
        <p className="jumb-description col-lg-8 mx-auto fs-5">
          Na Mr Puff você encontra um headshop completo, tudo para narguilé, seleção especial de vinhos, destilados, cervejas, acessórios e muito mais. Há 4 anos oferecemos qualidade, variedade e atendimento personalizado para tornar cada escolha uma experiência única.
        </p>

       
      </div>
    </div>
  );
};

export default Jumb;
