import React, { useState } from "react";
import Image from "../pictures/images.jpg";
import Image1 from "../pictures/images1.jpg";
import Image2 from "../pictures/images2.jpg";
import Image3 from "../pictures/images3.jpg";
import Image4 from "../pictures/images4.jpg";
import ImageUntitled from "../pictures/Untitled.jpg";
import Image5 from "../pictures/images5.jpg";
import Image6 from "../pictures/images6.jpg";
import ImageUntitledOne from "../pictures/Untitled1.jpg";
import ImageDeadpool from "../pictures/deadpoolandwolverine_lob_crd_03.jpg";

const movies = [
  { id: 1, title: "Ant-Man and the Wasp: Quantumania", poster: Image },
  { id: 2, title: "Shang-Chi and the Legend of the Ten Rings", poster: Image1 },
  { id: 3, title: "A Quiet Place: Day One", poster: Image2 },
  { id: 4, title: "Scary Movie", poster: Image3 },
  { id: 5, title: "Furiosa: A Mad Max Saga", poster: Image4 },
  { id: 6, title: "Venom: The Last Dance", poster: ImageUntitled },
  { id: 7, title: "The Voyage of Doctor Dolittle", poster: Image5 },
  { id: 8, title: "Joker: Folie à Deux", poster: Image6 },
  { id: 9, title: "Thunderbolts*", poster: ImageUntitledOne },
  { id: 10, title: "Deadpool & Wolverine", poster: ImageDeadpool },
];

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [discountCode, setDiscountCode] = useState("");

  const addReview = (movieId, rating, comment) => {
    const newReview = { movieId, rating, comment };
    setReviews([...reviews.slice(-2), newReview]); // Max 3 reviews

    if (reviews.length === 2) {
      setDiscountCode(`KORTING${Math.floor(Math.random() * 10000)}`);
    }
  };

  return (
    <div className="container">
      <MovieList movies={movies} addReview={addReview} />
      <ReviewList reviews={reviews} movies={movies} discountCode={discountCode} />
    </div>
  );
};

const MovieList = ({ movies, addReview }) => {
  return (
    <div className="movies">
      <h2>Films in de bioscoop</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <ReviewForm movie={movie} addReview={addReview} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ReviewForm = ({ movie, addReview }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const handleRatingClick = (newRating) => setRating(newRating);

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(movie.id, rating, comment);
    setComment(""); // Reset form
  };

  const renderStars = () => (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleRatingClick(star)}
          style={{ cursor: "pointer", color: star <= rating ? "#FFD700" : "#ccc" }}
        >
          ★
        </span>
      ))}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <label>
        Rating:
        {renderStars()}
      </label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Schrijf een recensie"
        required
      />
      <button class="btn" type="submit" id="customBtn" data-darkreader-inline-color="" data-darkreader-inline-border-top="" 
      data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" 
      data-darkreader-inline-boxshadow="" data-darkreader-inline-bgcolor="" data-darkreader-inline-bgimage="">Plaats review</button>
    </form>
  );
};

const ReviewList = ({ reviews, movies, discountCode }) => {
  const renderStars = (rating) => (
    <span style={{ color: "#FFD700" }}>
      {"★".repeat(rating)}{"☆".repeat(5 - rating)}
    </span>
  );

  return (
    <div className="reviews">
      <h2>Jouw Recensies</h2>
      {reviews.map((review, index) => {
        const movie = movies.find((m) => m.id === review.movieId);
        return (
          <div key={index} className="review-item">
            <h3>{movie.title}</h3>
            <p>Rating: {renderStars(review.rating)}</p>
            <p>{review.comment}</p>
          </div>
        );
      })}
      {reviews.length === 3 && (
        <div className="discount-message">
          <p>Gefeliciteerd! Je krijgt 10% korting. Gebruik code: {discountCode}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
