import { useState, useEffect } from "react";
import "./Reviews.css"

const Reviews = () => {

  const [reviews, setReviews] = useState([]); // Lista de reviews
  const [indexAtual, setIndexAtual] = useState(0); // Índice do review atual

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const url = "http://localhost:3001/reviews";
        const response = await fetch(url);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Erro ao buscar reviews:", error);
      }
    };

    fetchReviews();
    
  
  }, []);


    const proximo = () => 
      setIndexAtual((prev) => (prev + 1) % reviews.length);

    const anterior = () =>
      setIndexAtual((prev) => (prev - 1 + reviews.length) % reviews.length)

          if (reviews.length === 0) {
       return <p>Carregando avaliações...</p>;
} 

    const review = reviews[indexAtual]

  return (
    <div className="Review-Wrapper">


        <div>

          <p className="nome" > {review.author_name}</p>
          <img className="photo_url" src={review.profile_photo_url} alt="" />
          <img className="google" src="https://cdn.trustindex.io/assets/platform/Google/logo-dark.svg" alt="" />
          <p>{review.text}</p>
          
          {"⭐".repeat(review.rating)}
          
        </div>


        <div>
        <button className="buttons" onClick={anterior}>Anterior</button>
        <button className="buttons" onClick={proximo}>Próximo</button>
      </div>
     
    </div>

    
    

   


  );
};

export default Reviews;
