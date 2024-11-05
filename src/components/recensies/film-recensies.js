import React, { useState } from "react";
// import './film-recensies.css';
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
  { id: 1, title: "Movie 1", poster: Image },
  { id: 2, title: "Movie 2", poster: Image1},
  { id: 3, title: "Movie 3", poster: Image2},
  { id: 4, title: "Movie 4", poster: Image3},
  { id: 5, title: "Movie 5", poster: Image4},
  { id: 6, title: "Movie 6", poster: ImageUntitled},
  { id: 7, title: "Movie 7", poster: Image5},
  { id: 8, title: "Movie 8", poster: Image6},
  { id: 9, title: "Movie 9", poster: ImageUntitledOne},
  { id: 10, title: "Movie 10", poster: ImageDeadpool},
];

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [discountCode, setDiscountCode] = useState("");

  const addReview = (movieId, rating, comment) => {
    const newReview = { movieId, rating, comment };
    setReviews([...reviews.slice(-2), newReview]); // Maximaal 3 recensies

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

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(movie.id, rating, comment);
    setComment(""); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {star}
            </option>
          ))}
        </select>
      </label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Schrijf een recensie"
        required
      />
      <button type="submit">Plaats Recensie</button>
    </form>
  );
};

const ReviewList = ({ reviews, movies, discountCode }) => {
  return (
    <div className="reviews">
      <h2>Jouw Recensies</h2>
      {reviews.map((review, index) => {
        const movie = movies.find((m) => m.id === review.movieId);
        return (
          <div key={index} className="review-item">
            <h3>{movie.title}</h3>
            <p>Rating: {review.rating} sterren</p>
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
