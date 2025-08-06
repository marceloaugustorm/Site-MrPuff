import { useState, useEffect } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

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

  return (
    <div>
      <h2>Avaliações</h2>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>{review.author_name}</p>
          ⭐ {review.rating}
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
