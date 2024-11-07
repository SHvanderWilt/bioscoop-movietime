import React from 'react';
import Image from "../pictures/images.jpg";
import Image1 from "../pictures/images1.jpg";
import Image2 from "../pictures/images2.jpg";

const HomePage = () => {
  return (
    <div className='home'>
      <section className="movies">
        <h2>Recommended for you</h2>
        <div className="movie-grid">
          <div className="movie-card">
            <img src={Image} alt="Ant-Man and the Wasp: Quantumania" />
            <h3>Ant-Man and the Wasp: Quantumania</h3>
          </div>
          <div className="movie-card">
            <img src={Image1} alt="Shang-Chi and the Legend of the Ten Rings" />
            <h3>Shang-Chi and the Legend of the Ten Rings</h3>
          </div>
          <div className="movie-card">
            <img src={Image2} alt="A Quiet Place: Day One" />
            <h3>A Quiet Place: Day One</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
