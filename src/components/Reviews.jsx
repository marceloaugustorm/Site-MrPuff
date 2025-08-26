import { useState, useEffect } from "react";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("https://consumo-api-z8t2.onrender.com/reviews");
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
  };

  const anterior = () => {
    setIndexAtual((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  if (reviews.length === 0) {
    return (
      <div className="Review-Wrapper">
        <p className="loading">Carregando avaliações...</p>
      </div>
    );
  }

  // Review atual e próximo
  const review = reviews[indexAtual];
  const prReview = reviews[(indexAtual + 1) % reviews.length];

  return (
    <div className="Review-Wrapper">
      {[review, prReview].map((r, i) => (
        <div key={i} className="review-content">
          <div className="review-header">
            <img className="photo_url" src={r.profile_photo_url} alt={`Foto de ${r.author_name}`} />
            <div className="author-info">
              <p className="nome">{r.author_name}</p>
              <img
                className="google"
                src="https://cdn.trustindex.io/assets/platform/Google/logo-dark.svg"
                alt="Google Reviews"
              />
            </div>
          </div>

          <div className="rating">{"⭐".repeat(r.rating)}</div>
          <p className="review-text">{r.text}</p>
        </div>
      ))}

      <div className="navigation-buttons">
        <button className="buttons" onClick={anterior}>
          Anterior
        </button>
        <button className="buttons" onClick={proximo}>
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Reviews;
