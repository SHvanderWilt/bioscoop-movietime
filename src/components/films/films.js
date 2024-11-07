import React from "react";
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

const MovieOverview = () => {
  return (
    <div className="movie-overview-container">
      <h1>Movies Overview</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieOverview;
