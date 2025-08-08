import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Fundo1 from "../assets/imagem_fundo1.jpeg";
import Fundo2 from "../assets/imagem_fundo2.jpeg";
import Fundo3 from "../assets/imagem_fundo3.jpeg";
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
          Descubra a experiência única da nossa Adega & Tabacaria! Venha
          conferir nossos produtos exclusivos e aproveitar momentos especiais
          com qualidade e variedade. Entre em contato para saber mais!
        </p>

        {/* Ícones */}
        <div className="d-flex justify-content-center gap-4 mt-4">
          <a href="https://www.instagram.com/mrpuffabc/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={36} color="white" style={{ cursor: "pointer" }} title="Instagram" />
          </a>
          <a href="https://api.whatsapp.com/message/46HCAK57GAZAC1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={36} color="white" style={{ cursor: "pointer" }} title="WhatsApp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumb;
