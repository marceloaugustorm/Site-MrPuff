import { useState, useEffect } from "react";
import "./Reviews.css"

const Reviews = () => {

  const [reviews, setReviews] = useState([]); // Lista de reviews
  const [indexAtual, setIndexAtual] = useState(0); // Índice do review atual
  const [prIndex, setprIndex] = useState(1)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/reviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Erro ao buscar reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const proximo = () => {
    setIndexAtual((prev) => (prev + 1) % reviews.length);
    setprIndex((prev) => (prev + 2) % reviews.length);
  }

  const anterior = () => {
    setIndexAtual((prev) => (prev - 1 + reviews.length) % reviews.length)
    setprIndex((prev) => (prev - 2 + reviews.length) % reviews.length)
  }

  if (reviews.length === 0) {
    return (
      <div className="Review-Wrapper">
        <p className="loading">Carregando avaliações...</p>
      </div>
    );
  } 

    if (!reviews[indexAtual] || !reviews[prIndex]) {
    return null; // Ou <p>Erro ao carregar avaliações</p> se quiser mostrar algo
  }

  const review = reviews[indexAtual]
  const prReviews = reviews[prIndex]

  return (
    <div className="Review-Wrapper">
      <div className="review-content">
        <div className="review-header">
          <img className="photo_url" src={review.profile_photo_url} alt={`Foto de ${review.author_name}`} />
          <div className="author-info">
            <p className="nome">{review.author_name}</p> 
            <img className="google" src="https://cdn.trustindex.io/assets/platform/Google/logo-dark.svg" alt="Google Reviews" />

      
          </div>
        </div>
      
        
        <div className="rating">
          {"⭐".repeat(review.rating)}
        </div>
        
        <p className="review-text">{review.text} </p>
      </div>

      <div className="review-content">
        <div className="review-header">
          <img className="photo_url" src={prReviews.profile_photo_url} alt={`Foto de ${prReviews.author_name}`} />
          <div className="author-info">
            <p className="nome">{prReviews.author_name}</p> 
            <img className="google" src="https://cdn.trustindex.io/assets/platform/Google/logo-dark.svg" alt="Google Reviews" />
            
      
          </div>
        </div>
      
        
        <div className="rating">
          {"⭐".repeat(prReviews.rating)}
        </div>
        
        <p className="review-text">{prReviews.text}</p>

      
      </div>

        <div className="navigation-buttons">
        <button className="buttons" onClick={anterior}>Anterior</button>
        <button className="buttons" onClick={proximo}>Próximo</button>
      </div>
      
      
    </div>
  );
};

export default Reviews;