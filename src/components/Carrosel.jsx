import React, { useState } from "react";
import img1 from "../assets/Imagem 1.png";
import img2 from "../assets/Imagem 2.jpg";
import img3 from "../assets/Imagem 3.jpg";


import "./Carrosel.css";

const produtos = [


  {
    imagem: img1,
    nome: "NAY  Mango Melon",
    descricao: "Sabor tropical, ideal para sessões leves e refrescantes.",
    estrela: "⭐️⭐️⭐️⭐️⭐️",
    link:( <a className="link" href="https://mrpuff-drinks-o-hookah-o-culture.goomer.app/detail/11222271"  target="_blank">Compre aqui</a>)
    
  },
  {
    imagem: img2,
    nome: "Vaso - MD Grande Preto",
    descricao: "Vaso de narguile MD grande preto com acabamento sofisticado para um visual moderno e elegante.",
    estrela: "⭐️⭐️⭐️⭐️⭐️",
    link: (<a className="link" href="https://mrpuff-drinks-o-hookah-o-culture.goomer.app/detail/11413932" target="_blank">Compre aqui</a>)
  },
  {
    imagem: img3,
    nome: "Narguile - Zenith Hookah Nuts Completo",
    descricao: "Narguile desenvolvido para pessoas exigentes, contando com toda a qualidade da Zenith Hookah.",
    estrela: "⭐️⭐️⭐️⭐️⭐️",
    link: (<a className="link" href="https://mrpuff-drinks-o-hookah-o-culture.goomer.app/detail/6796791" target="_blank">Compre aqui</a>)
  }
];

const Carrossel = () => {
  const [indexAtual, setIndexAtual] = useState(0);
  
  const produto = produtos[indexAtual];

  const proximo = () =>
    setIndexAtual((prev) => (prev + 1) % produtos.length);

  const anterior = () =>
    setIndexAtual((prev) => (prev - 1 + produtos.length) % produtos.length);

  

  return (
    <div className="carrossel-wraper" >
      <div className="carrossel-container">

       <div key={indexAtual} className="imagem-wrapper"> 
          <img src={produto.imagem} alt={produto.nome} />

       </div>
        
  
        

      {/* Botão Anterior */}
      <button
        className="carousel-control-prev"
        type="button"
        aria-label="Previous"
        
        onClick={anterior}
      >
 
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
        
      {/* Botão Próximo */}
      <button
        className="carousel-control-next"
        type="button"
        aria-label="Next"
        onClick={proximo}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>

      </button>

      
        
      </div>

      
       <div className="info">
      <h2>{produto.nome}</h2>
      <p>{produto.descricao}</p>
      <p>{produto.estrela}</p>
      <p>{produto.link}</p>
      
      </div>    


      
  
    </div>
  );
};

export default Carrossel;
