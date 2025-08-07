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
            Desde 2021, a Mr. Puff se destaca por ir além do convencional. Unimos adega, tabacaria e loja de conveniência em um só lugar, oferecendo variedade,
            praticidade e produtos premium para atender às mais diversas ocasiões.
          </p>
        </section>

        <section className="conheca-section">
          <h2>Nossa Missão</h2>
          <p>
            Proporcionar uma experiência única e eficiente, com atendimento personalizado, ambiente agradável e um mix de produtos que entrega conveniência com qualidade. 
            Na Mr. Puff, cada visita se transforma em uma nova oportunidade de surpreender o cliente.
          </p>
        </section>

        <section className="conheca-section">
          <h2>Diferenciais</h2>
          <div className="diferenciais-grid">
            <div className="diferencial-item">
              <h3>Produtos Selecionados</h3>
              <p>Trabalhamos exclusivamente com produtos originais e com as marcas mais renomadas do mercado. 
                Qualidade e confiança estão no centro de tudo o que oferecemos.</p>
            </div>
            <div className="diferencial-item">
              <h3>Novidades Sempre em Primeira Mão</h3>
              <p>Na Mr. Puff, você encontra os principais lançamentos
                 e tendências do mercado, com novidades que chegam antes de todo mundo.</p>
            </div>
            <div className="diferencial-item">
              <h3>Ambiente Impecável</h3>
              <p>Valorizamos um ambiente limpo, agradável e bem cuidado — pensado para que cada visita seja confortável e prazerosa.</p>
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