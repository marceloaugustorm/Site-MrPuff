import { useState, useEffect } from "react";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const placeId = "ChIJXwpN295pzpQRtksKtzydMoQ";
      const apiKey = "AIzaSyAyrEG5VMsd3KexUoFEAdEcc6w0LQnzXtI"; // Corrigido o espaço aqui

      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,formatted_phone_number,reviews&key=${apiKey}`
        );
        const data = await response.json();
        console.log(data);

        if (data.result?.reviews) {
          setReviews(data.result.reviews.slice(0, 5));
        }
      } catch (error) {
        console.log("Erro ao buscar avaliação:", error.message);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h2>Avaliações do Google</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index}>
            <strong>{review.author_name}</strong> ({review.rating}⭐)
            <p>"{review.text}"</p>
            <hr />
          </div>
        ))
      ) : (
        <p>Carregando avaliações...</p>
      )}
    </div>
  );
};

export default GoogleReviews;
