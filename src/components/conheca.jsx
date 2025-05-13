import React from "react";
import { useNavigate } from "react-router-dom";
import "./conheca.css";

function Conheca() {
  const navigate = useNavigate();

  const voltarParaHome = () => {
    navigate('/');
  };

  return (
    <div className="conheca-container">
      <div className="conheca-content">
        <h1 className="conheca-title">Conheça a Mr. Puff</h1>
        
        <section className="conheca-section">
          <h2>Nossa História</h2>
          <p>
            Fundado em 2018, o Mr. Puff nasceu da paixão por criar um espaço único onde os amantes 
            de hookah, drinks artesanais e boa gastronomia pudessem se reunir. Localizado no coração de Santo André,
            nos tornamos rapidamente um ponto de encontro para quem busca uma experiência completa.
          </p>
        </section>

        <section className="conheca-section">
          <h2>Nossa Missão</h2>
          <p>
            Proporcionar momentos inesquecíveis através de uma combinação perfeita entre atendimento 
            personalizado, ambiente acolhedor e produtos de alta qualidade. Acreditamos que cada cliente 
            merece uma experiência única, onde cada detalhe é cuidadosamente pensado.
          </p>
        </section>

        <section className="conheca-section">
          <h2>Diferenciais</h2>
          <div className="diferenciais-grid">
            <div className="diferencial-item">
              <h3>Drinks Exclusivos</h3>
              <p>Receitas autorais criadas por nossos mixologistas usando ingredientes frescos e técnicas modernas.</p>
            </div>
            <div className="diferencial-item">
              <h3>Hookah Premium</h3>
              <p>Utilizamos apenas essências de alta qualidade e equipamentos modernos para uma experiência superior.</p>
            </div>
            <div className="diferencial-item">
              <h3>Ambiente</h3>
              <p>Decoração contemporânea com toques aconchegantes, criando o cenário perfeito para momentos especiais.</p>
            </div>
            <div className="diferencial-item">
              <h3>Gastronomia</h3>
              <p>Cardápio elaborado que une sabores tradicionais e inovadores, perfeito para compartilhar entre amigos.</p>
            </div>
          </div>
        </section>

        <section className="conheca-section">
          <h2>Horário de Funcionamento</h2>
          <div className="horarios">
            <p><strong>Segunda a Quinta:</strong> 11h às 20h</p>
            <p><strong>Sexta e Sábado:</strong> 11h às 21h</p>
            <p><strong>Domingo:</strong> 11h às 18h</p>
          </div>
        </section>

        <button className="voltar-button" onClick={voltarParaHome}>
          Voltar para Home
        </button>
      </div>
    </div>
  );
}

export default Conheca;