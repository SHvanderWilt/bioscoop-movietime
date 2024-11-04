import React, { useState } from 'react';
// import './home.css';

const HomePage = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'home dark' : 'home light'}>
            <div className="Logo">
                <h1>Cinema XYZ</h1>
                {/* <button onClick={toggleTheme}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button> */}
            </div>

            <section className="banner">
                <h2>Welcome to Cinema XYZ</h2>
                <p>Catch the latest movies in our state-of-the-art theaters!</p>
            </section>

            <section className="movies">
                <h2>Now Showing</h2>
                <div className="movie-grid">
                    <div className="movie-card">
                        <img src="movie1.jpg" alt="Movie 1" />
                        <h3>Movie 1</h3>
                        <p>Action/Adventure</p>
                    </div>
                    <div className="movie-card">
                        <img src="movie2.jpg" alt="Movie 2" />
                        <h3>Movie 2</h3>
                        <p>Comedy/Drama</p>
                    </div>
                    <div className="movie-card">
                        <img src="movie3.jpg" alt="Movie 3" />
                        <h3>Movie 3</h3>
                        <p>Horror/Thriller</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
